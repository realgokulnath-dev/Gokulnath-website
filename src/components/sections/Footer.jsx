import { Link } from 'react-router-dom'

function SocialIcon({ children, label }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      aria-label={label}
      role="img"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block' }}
    >
      {children}
    </svg>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <Link className="wordmark" to="/">
          GN<span>.</span>
        </Link>
        <p>
          Thoughtful software,<br />
          built for the real world.
        </p>
        <div className="footer-links">
          <a href="#about">Index</a>
          <a href="https://www.instagram.com/gokulnath.dev" aria-label="Instagram">
            <SocialIcon label="Instagram">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
            </SocialIcon>
          </a>
          <a href="https://www.linkedin.com/in/gokul-nath-s/" aria-label="LinkedIn">
            <SocialIcon label="LinkedIn">
              <path d="M8 10v8" />
              <path d="M8 7.5v.01" />
              <path d="M12 18v-5.2c0-1.3 1.1-2.3 2.4-2.3s2.1 1 2.1 2.3V18" />
              <path d="M12 10v8" />
            </SocialIcon>
          </a>
          <a href="https://github.com/realgokulnath-dev" aria-label="GitHub">
            <SocialIcon label="GitHub">
              <path d="M9 18c-4 1.2-4-2-5-2" />
              <path d="M15 22v-3.9c0-1 .4-1.9 1.1-2.5 3.4-1.1 5.9-4.8 5.9-9.1 0-1.9-.7-3.7-2-5.1C18.5 1.2 16.5 0 13.8 0c-1.7 0-3.3.5-4.6 1.7A9.5 9.5 0 0 0 6 7.4c0 4.3 2.5 8 5.9 9.1.7.6 1.1 1.4 1.1 2.5V22" />
            </SocialIcon>
          </a>
          <a href="https://wa.me/919342486977" aria-label="WhatsApp">
            <SocialIcon label="WhatsApp">
              <path d="M20.4 3.7A10.8 10.8 0 0 0 4 18.9L3 21l2.3-1a10.8 10.8 0 0 0 15.1-15.3Z" />
              <path d="M15.6 13.8c-.3-.1-1.7-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.7.9-.9 1.1-.1.2-.3.2-.5.1a8.6 8.6 0 0 1-2.5-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.4.1-.1.2-.3.3-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.8.8-.8 2s.8 2.3.9 2.5c.1.1 1.6 2.5 3.9 3.4.6.2 1 .4 1.4.5.6.2 1.2.2 1.7.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.5-.3Z" />
            </SocialIcon>
          </a>
          <a href="mailto:gokulsaravanan034@gmail.com" aria-label="Email">
            <SocialIcon label="Email">
              <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
              <path d="m5 7 7 6 7-6" />
            </SocialIcon>
          </a>
        </div>
        <small>© Gokul Nath S</small>
      </div>
    </footer>
  )
}
