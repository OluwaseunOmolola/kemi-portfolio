import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'

// A link is only rendered once it has a real address, so unfilled entries stay clean.
function EntryLink({ link }) {
  if (!link || !link.href) return null
  return (
    <a className="go" href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label}
    </a>
  )
}

function Ledger({ items, timeline }) {
  return (
    <ul className={timeline ? 'ledger tl' : 'ledger'}>
      {items.map((item, i) => (
        <li key={i}>
          <span className="y">{item.year}</span>
          <div>
            <b>
              {item.title}
              {item.tag && <span className="w">{item.tag}</span>}
            </b>
            {item.lines?.map((line, j) => (
              <p key={j}>{line}</p>
            ))}
            {item.list && (
              <ul className="sub">
                {item.list.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            )}
            <EntryLink link={item.link} />
          </div>
        </li>
      ))}
    </ul>
  )
}

function Table({ columns, rows }) {
  return (
    <div className="tw">
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={j === 0 ? 'n' : undefined} data-label={columns[j]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Media({ items }) {
  return (
    <ul className="media">
      {items.map((m, i) => (
        <li key={i}>
          <span className="out">{m.outlet}</span>
          <span className="hd">{m.headline}</span> <EntryLink link={m.link} />
        </li>
      ))}
    </ul>
  )
}

function Figures({ figures }) {
  return (
    <div className="gallery">
      {figures.map((f, i) => (
        <figure key={i}>
          {f.src ? <img src={f.src} alt={f.alt} loading="lazy" /> : <div className="ph" role="img" aria-label={f.alt} />}
          <figcaption>{f.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

// The body of one group: its table, media list or ledger, plus any note and photos.
function GroupBody({ group, timeline }) {
  return (
    <>
      {group.kind === 'table' ? (
        <Table columns={group.columns} rows={group.rows} />
      ) : group.kind === 'media' ? (
        <Media items={group.items} />
      ) : (
        <Ledger items={group.items} timeline={timeline} />
      )}
      {group.note && (
        <p className="note">
          {group.note}{' '}
          {group.noteLink && (
            <a href={group.noteLink.href} target="_blank" rel="noopener noreferrer">
              {group.noteLink.label}
            </a>
          )}
        </p>
      )}
      {group.figures && <Figures figures={group.figures} />}
    </>
  )
}

// 2 columns on tablets and up, 1 column on phones.
function useColumns() {
  const query = '(min-width: 641px)'
  const [wide, setWide] = useState(() => typeof window === 'undefined' || window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setWide(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return wide ? 2 : 1
}

// A grid of sub-topic buttons. A sub-topic opens full width under its own row.
function SubTopics({ id, groups, open, onToggle }) {
  const cols = useColumns()
  const rows = []
  for (let i = 0; i < groups.length; i += cols) {
    rows.push(groups.slice(i, i + cols).map((group, k) => ({ group, index: i + k })))
  }

  return (
    <div className="subtopics">
      {rows.map((row, r) => (
        <div key={r}>
          <div className={cols === 2 ? 'subrow' : 'subrow one'}>
            {row.map(({ group, index }) => {
              const key = `${id}:${index}`
              const isOpen = open.has(key)
              return (
                <button
                  key={key}
                  type="button"
                  className="tile"
                  id={`${id}-g${index}-tile`}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-g${index}-panel`}
                  onClick={() => onToggle(key)}
                >
                  <span>{group.title}</span>
                  <span className="tile-plus" aria-hidden="true">
                    <Icon name={isOpen ? 'minus' : 'plus'} />
                  </span>
                </button>
              )
            })}
          </div>
          {row
            .filter(({ index }) => open.has(`${id}:${index}`))
            .map(({ group, index }) => (
              <div
                key={index}
                className="subpanel"
                role="region"
                id={`${id}-g${index}-panel`}
                aria-labelledby={`${id}-g${index}-tile`}
              >
                <GroupBody group={group} />
              </div>
            ))}
        </div>
      ))}
    </div>
  )
}

// One dropdown card. A topic with a single group shows it straight away (as a
// timeline); a topic with several groups shows a grid of sub-topic buttons.
export default function Section({ section, meta, open, onToggle }) {
  const { id, title, groups } = section
  return (
    <details
      className="topic"
      id={id}
      open={open.has(id)}
      onToggle={(e) => onToggle(id, e.currentTarget.open)}
    >
      <summary>
        <span className="topic-icon">
          <Icon name={meta.icon} />
        </span>
        <h3 className="topic-title">
          {title}
          <span className="topic-sub">{meta.blurb}</span>
        </h3>
        <span className="topic-chev">
          <Icon name="chevron" />
        </span>
      </summary>
      <div className="topic-body">
        {groups.length > 1 ? (
          <SubTopics id={id} groups={groups} open={open} onToggle={onToggle} />
        ) : (
          <GroupBody group={groups[0]} timeline />
        )}
      </div>
    </details>
  )
}