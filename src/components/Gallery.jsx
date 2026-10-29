import { useRef, useState } from 'react'

// Expanding-panel gallery. Hover, tap, or focus a panel to open it; the arrow keys move between panels.
export default function Gallery({ items, head }) {
  const [active, setActive] = useState(0)
  const hits = useRef([])
  const canHover =
    typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(hover: hover)').matches

  if (!items.length) return null

  function onKeyDown(e, i) {
    const step =
      e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = (i + step + items.length) % items.length
    if (hits.current[next]) hits.current[next].focus()
  }

  return (
    <section className="gallery-sec" id="gallery" aria-labelledby="gallery-h">
      <div className="folio-head">
        <div>
          <p className="eyebrow">{head.eyebrow}</p>
          <h2 id="gallery-h">{head.title}</h2>
        </div>
      </div>

      <ul className="gp-rail" aria-label="Photo gallery">
        {items.map((item, i) => {
          const on = active === i
          return (
            <li key={item.id} className={`gp${on ? ' on' : ''}${item.link ? ' has-link' : ''}`}>
              {item.src ? (
                <img className="gp-img" src={item.src} alt="" loading="lazy" />
              ) : (
                <div className="gp-img gp-ph" aria-hidden="true" />
              )}
              <span className="gp-shade" aria-hidden="true" />
              <button
                ref={(el) => {
                  hits.current[i] = el
                }}
                type="button"
                className="gp-hit"
                aria-expanded={on}
                aria-label={item.alt}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseEnter={() => canHover && setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span className="gp-text" aria-hidden="true">
                  <span className="gp-tag">{item.tag}</span>
                  <span className="gp-title">{item.title}</span>
                  {item.description && <span className="gp-desc">{item.description}</span>}
                </span>
              </button>
              {on && item.link && (
                <a className="gp-link" href={item.link.href} target="_blank" rel="noopener noreferrer">
                  {item.link.label}
                </a>
              )}
            </li>
          )
        })}
      </ul>
      <p className="hint">Select a photo to enlarge it. Use the arrow keys to move between photos.</p>
    </section>
  )
}