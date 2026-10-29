import { useRef, useState } from 'react'

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === 'next' ? <path d="M5 12h14m-6-6 6 6-6 6" /> : <path d="M19 12H5m6 6-6-6 6-6" />}
    </svg>
  )
}

export default function SelectedPublications({ items, email }) {
  const railRef = useRef(null)
  const [active, setActive] = useState(0)

  function goTo(index) {
    const rail = railRef.current
    const card = rail?.children[index]
    if (!rail || !card) return

    const left = card.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    rail.scrollTo({ left, behavior })
    setActive(index)
  }

  function updateActive() {
    const rail = railRef.current
    if (!rail?.children.length) return
    const firstCard = rail.children[0]
    const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 0
    const stride = firstCard.getBoundingClientRect().width + gap
    setActive(Math.min(items.length - 1, Math.round(rail.scrollLeft / stride)))
  }

  return (
    <>
      <section className="selected-publications" aria-labelledby="selected-publications-title">
        <div className="selected-heading">
          <div className="selected-heading-copy">
            <span className="selected-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v17H7.5A2.5 2.5 0 0 0 5 21.5z" />
                <path d="M5 4.5v17M9 7h7M9 11h7" />
              </svg>
            </span>
            <div>
              <h2 id="selected-publications-title">Selected Publications</h2>
              <p>Research, academic and professional publications.</p>
            </div>
          </div>
          <a className="selected-all" href="#publications">
            View all publications <ArrowIcon direction="next" />
          </a>
        </div>

        <div className="publication-rail" ref={railRef} onScroll={updateActive}>
          {items.map((item) => (
            <article className="publication-card" key={`${item.year}-${item.title}`}>
              <span className="publication-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.lines?.[0]}</p>
            </article>
          ))}
        </div>

        <div className="publication-controls" aria-label="Publication carousel controls">
          <button type="button" onClick={() => goTo((active - 1 + items.length) % items.length)} aria-label="Previous publication">
            <ArrowIcon direction="previous" />
          </button>
          <div className="publication-dots">
            {items.map((item, index) => (
              <button
                key={`${item.year}-${index}`}
                type="button"
                className={index === active ? 'active' : ''}
                onClick={() => goTo(index)}
                aria-label={`Show publication ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" onClick={() => goTo((active + 1) % items.length)} aria-label="Next publication">
            <ArrowIcon direction="next" />
          </button>
        </div>
      </section>

      <aside className="contact-banner" aria-label="Contact Kemi Busari">
        <span className="contact-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5h-6l-4.5 4v-4h-.5A2.5 2.5 0 0 1 4 13.5z" />
            <path d="M8 8h8M8 11.5h5" />
          </svg>
        </span>
        <div className="contact-banner-copy">
          <h2>Let’s Connect</h2>
          <p>Interested in my work, collaborations or opportunities? Feel free to reach out.</p>
        </div>
        <a className="contact-banner-button" href={`mailto:${email}`}>
          Get in Touch <ArrowIcon direction="next" />
        </a>
      </aside>
    </>
  )
}