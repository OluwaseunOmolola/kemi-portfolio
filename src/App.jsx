import { useCallback, useEffect, useState } from 'react'
import { profile, stats, sections } from './content.js'
import { folio, galleryHead, sectionMeta } from './sectionMeta.js'
import { galleryItems } from './galleryItems.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Section from './components/Section.jsx'
import Gallery from './components/Gallery.jsx'
import SelectedPublications from './components/SelectedPublications.jsx'

// The top bar links to every card, plus the gallery.
const NAV = [...sections, { id: 'gallery', nav: 'Gallery' }]

// Every card and sub-topic has a key: "education", "publications", "publications:0", ...
const ALL_KEYS = sections.flatMap((s) => [s.id, ...s.groups.map((_, i) => `${s.id}:${i}`)])
const scholarship = sections.find((section) => section.id === 'publications')
const selectedPublications = [
  ...scholarship.groups.find((group) => group.title === 'Research Publications').items,
  {
    ...scholarship.groups.find((group) => group.title === 'Key Citations').items[0],
    year: '2018',
  },
]

export default function App() {
  const [open, setOpen] = useState(() => new Set())

  // toggle(key) flips it; toggle(key, true/false) sets it.
  const toggle = useCallback((key, value) => {
    setOpen((prev) => {
      const want = value === undefined ? !prev.has(key) : value
      if (prev.has(key) === want) return prev
      const next = new Set(prev)
      if (want) next.add(key)
      else next.delete(key)
      return next
    })
  }, [])

  // A link such as /#publications opens that card.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1)
      if (sections.some((s) => s.id === id)) toggle(id, true)
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [toggle])

  return (
    <>
      <Header name={profile.name.join(' ')} sections={NAV} />
      <main className="wrap">
        <Hero profile={profile} />
        <Stats stats={stats} />

        <section className="folio" aria-labelledby="folio-h">
          <div className="folio-head">
            <div>
              <p className="eyebrow">{folio.eyebrow}</p>
              <h2 id="folio-h">{folio.title}</h2>
            </div>
            <p className="folio-intro">{folio.intro}</p>
          </div>

          <div className="tools">
            <button className="ctl" type="button" onClick={() => setOpen(new Set(ALL_KEYS))}>
              Expand all
            </button>
            <button className="ctl" type="button" onClick={() => setOpen(new Set())}>
              Collapse all
            </button>
          </div>

          {sections.map((s) => (
            <Section key={s.id} section={s} meta={sectionMeta[s.id]} open={open} onToggle={toggle} />
          ))}
        </section>

        <Gallery items={galleryItems} head={galleryHead} />
        <SelectedPublications items={selectedPublications} email={profile.emails[0]} />
      </main>
      <div className="wrap">
        <footer>
          {profile.name.join(' ')} · {profile.emails[0]} ·{' '}
          <a href={profile.links[0].href} target="_blank" rel="noopener noreferrer">
            {profile.links[0].label}
          </a>{' '}
          · Updated {profile.updated}
        </footer>
      </div>
    </>
  )
}