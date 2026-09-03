export default function ProjectLink({ url, label = 'View Project', fallback = null }) {
  if (!url) {
    if (!fallback) return null

    return (
      <span className="button button-quiet" aria-disabled="true" style={{ pointerEvents: 'none' }}>
        {fallback}
      </span>
    )
  }

  return (
    <a
      className="button button-quiet"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
    >
      {label}
    </a>
  )
}
