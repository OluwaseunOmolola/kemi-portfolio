import ThemeToggle from './ThemeToggle.jsx'

export default function Header({ name, sections }) {
  return (
    <div className="bar">
      <div className="wrap">
        <strong>{name}</strong>
        <nav aria-label="Sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.nav}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </div>
  )
}
