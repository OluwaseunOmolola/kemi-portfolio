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
          <li><b>Emails:</b></li>
          {profile.emails.map((email) => (
            <li key={email}>
              <a href={`mailto:${email}`}>{email}</a>
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
