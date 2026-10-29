import { useState } from 'react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard blocked: the address is still visible and selectable */
    }
  }

  return (
    <button className="copy" type="button" onClick={copy} aria-label={`Copy ${text}`}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function Photo({ photo, className, initials }) {
  return photo.src ? (
    <img className={className} src={photo.src} alt={photo.alt} />
  ) : (
    <div className={`ph ${className}`} role="img" aria-label={photo.alt}>
      {initials}
    </div>
  )
}

export default function Hero({ profile }) {
  const [first, last] = profile.name
  const initials = `${first[0]}${last[0]}`

  return (
    <section className="hero" aria-label={`${first} ${last}`}>
      <div>
        <h1>
          {first} <span className="hl">{last}</span>
        </h1>
        <p className="role">{profile.role}</p>

        <div className="interests">
          <span className="lbl">Research interests</span>
          <ul>
            {profile.interests.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

        <p className="bylines">
          <b>Bylines:</b> {profile.bylines}
        </p>

        <ul className="contact">
          {profile.emails.map((email) => (
            <li key={email}>
              <span>{email}</span>
              <CopyButton text={email} />
            </li>
          ))}
          {profile.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-photo">
        <div className="portrait">
          <Photo photo={profile.portrait} className="" initials={initials} />
        </div>
      </div>
    </section>
  )
}
