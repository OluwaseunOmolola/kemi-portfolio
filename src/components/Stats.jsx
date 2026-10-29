export default function Stats({ stats }) {
  if (!stats.length) return null
  return (
    <dl className="stats">
      {stats.map((s) => (
        <div key={s.label}>
          <dt>{s.value}</dt>
          <dd>{s.label}</dd>
        </div>
      ))}
    </dl>
  )
}
