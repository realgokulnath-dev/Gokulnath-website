import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { reveal } from '../../utils/animations'
import TypingAnimation from '../TypingAnimation'

const heroImage = `${import.meta.env.BASE_URL}gkl.jpeg`

const titles = [
  'Python Full-Stack Developer',
  'Python Backend Developer',
  'Frontend Developer',
  'Web Developer',
  'Full-Stack Developer',
]

function SocialIcon({ icon, href, label }) {
  return (
    <a href={href} aria-label={label} className="social-icon-home">
      {icon}
    </a>
  )
}

export default function Home() {
  return (
    <section className="hero container">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
        <span className="eyebrow">
          <TypingAnimation titles={titles} />
        </span>
        <h1>
          Gokul Nath S<br />
          <em>Full Stack Developer</em>
        </h1>
        <p className="hero-lede">
          Building modern and scalable web applications with a strong focus on performance.
Combining clean frontend experiences with reliable backend architecture.
Passionate about turning ideas into practical and impactful digital solutions.        </p>
        <div className="hero-social-icons">
          <SocialIcon
            label="Instagram"
            href="https://www.instagram.com/gokulnath.dev"
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.5" />
                <circle cx="17.3" cy="6.7" r="1" fill="white" />
              </svg>
            }
          />
          <SocialIcon
            label="Email"
            href="mailto:gokulsaravanan034@gmail.com"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="4" y="7.5" width="16" height="9" rx="2" />
                <path d="m4 7.5 8 6 8-6" />
              </svg>
            }
          />
          <SocialIcon
            label="GitHub"
            href="https://github.com/realgokulnath-dev"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M9 18c-4 1.2-4-2-5-2" />
                <path d="M15 22v-3.9c0-1 .4-1.9 1.1-2.5 3.4-1.1 5.9-4.8 5.9-9.1 0-1.9-.7-3.7-2-5.1C18.5 1.2 16.5 0 13.8 0c-1.7 0-3.3.5-4.6 1.7A9.5 9.5 0 0 0 6 7.4c0 4.3 2.5 8 5.9 9.1.7.6 1.1 1.4 1.1 2.5V22" />
              </svg>
            }
          />
          <SocialIcon
            label="LinkedIn"
            href="https://www.linkedin.com/in/gokul-nath-s/"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M8 10v8" />
                <path d="M8 7.5v.01" />
                <path d="M12 18v-5.2c0-1.3 1.1-2.3 2.4-2.3s2.1 1 2.1 2.3V18" />
                <path d="M12 10v8" />
                <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
              </svg>
            }
          />
          <SocialIcon
            label="WhatsApp"
            href="https://wa.me/919342486977"
            icon={
              <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0">
                <path d="M20.4 3.7A10.8 10.8 0 0 0 4 18.9L3 21l2.3-1a10.8 10.8 0 0 0 15.1-15.3Z" />
              </svg>
            }
          />
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <ArrowUpRight size={16} />
          </a>
          <a className="button button-quiet" href="#contact">
            Let&apos;s connect <span>↗</span>
          </a>
        </div>
        <div className="hero-foot">
          <span>
            <b>Salem</b> Tamil Nadu
          </span>
          <span className="availability">
            <i /> Open to opportunities
          </span>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="portrait-glow" />
        <img
          src={heroImage}
          alt="Gokul Nath in a bright modern office"
        />
        <div className="image-label label-top">Salem / 2026</div>
        <div className="image-label label-bottom">
          <span>Currently</span>
          <b>Building Products</b>
        </div>
        <div className="portrait-mark">GN</div>
      </motion.div>
    </section>
  )
}
