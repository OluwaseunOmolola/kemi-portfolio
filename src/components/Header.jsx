import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

// The short list shown on desktop. Edit the labels or ids here.
const MAIN = [
  { id: 'publications', label: 'Scholarship' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'experience', label: 'Practice' },
  { id: 'connect', label: 'Contact' },
]

const MenuIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
)

export default function Header({ name, sections }) {
  const [open, setOpen] = useState(false)

  // Close the menu with Escape, and when the screen grows back to desktop width.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 700 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <div className="bar">
      <div className="wrap">
        <strong>{name}</strong>

        <nav className="nav-desktop" aria-label="Main">
          {MAIN.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />

        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={close}>
              {s.nav}
            </a>
          ))}
          <a href="#connect" onClick={close}>
            Contact
          </a>
        </nav>
      )}
    </div>
  )
}