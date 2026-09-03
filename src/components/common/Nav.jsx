import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { resumeUrl } from '../../data'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const links = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Expertise', '#expertise'],
    ['Work', '#work'],
    ['Startup', '#startup'],
    ['Publication', '#publication'],
    ['Blog', '#blog'],
  ]

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="wordmark" to="/">
          GN<span>.</span>
        </Link>

        <div className="nav-links">
          {links.map(([label, href]) => (
            <a
              key={href}
              className={location.hash === href.slice(1) ? 'active' : ''}
              href={href}
            >
              {label}
            </a>
          ))}
        </div>

        <a className="nav-resume" href={resumeUrl} download>
          Download Resume
        </a>

        <a className="nav-cta" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <a className="nav-resume mobile-resume" href={resumeUrl} download onClick={() => setOpen(false)}>
            Download Resume
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s connect <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}
