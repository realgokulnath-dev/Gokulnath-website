const fileTypePattern = /\.(pdf|png|jpe?g|gif|webp|svg)(\?.*)?$/i

export default function CertificateButton({ url, label = 'View Certificate' }) {
  if (!url) return null

  const isPdf = /\.pdf(\?.*)?$/i.test(url)
  const isImage = /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(url)

  const handleClick = (event) => {
    if (!url) {
      event.preventDefault()
      return
    }

    if (!isPdf && !isImage) {
      return
    }

    event.preventDefault()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <a
      className="button button-quiet"
      href={url}
      target={isPdf || isImage ? '_blank' : undefined}
      rel={isPdf || isImage ? 'noreferrer' : undefined}
      aria-label={label}
      style={{ display: 'inline-flex' }}
      onClick={handleClick}
    >
      {label}
    </a>
  )
}
