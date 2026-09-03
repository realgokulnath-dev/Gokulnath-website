import { motion } from 'framer-motion'
import SectionIntro from '../common/SectionIntro'
import { stackvernInfo, founderInfo } from '../../data'
import { reveal } from '../../utils/animations'

export default function Startup() {
  return (
    <section id="startup" className="startup section-band">
      <div className="container">
        <SectionIntro eyebrow="05 / Startup" title="Building the future." />

        <div className="startup-content">
          <motion.div className="startup-box primary-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="startup-grid">
              <div className="startup-logo-area">
                <img src="/stackvern.jpeg" alt={stackvernInfo.name} className="startup-logo" />
              </div>
              <div className="startup-info">
                <h3>{stackvernInfo.role}</h3>
                <p className="startup-title">{stackvernInfo.name}</p>
                <p className="startup-description">{stackvernInfo.description}</p>
                <p className="startup-full-description">{stackvernInfo.fullDescription}</p>

                <div className="startup-links">
                  <a href={stackvernInfo.website} target="_blank" rel="noreferrer" aria-label="StackVern Website">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                  </a>
                  <a href={`https://www.instagram.com/${stackvernInfo.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" aria-label="StackVern Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a href={`mailto:${stackvernInfo.email}`} aria-label="StackVern Email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="7.5" width="16" height="9" rx="2" />
                      <path d="m4 7.5 8 6 8-6" />
                    </svg>
                  </a>
                  <a href={`https://www.linkedin.com/company/${stackvernInfo.linkedin.replace('@', '')}`} target="_blank" rel="noreferrer" aria-label="StackVern LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M8 10v8" />
                      <path d="M8 7.5v.01" />
                      <path d="M12 18v-5.2c0-1.3 1.1-2.3 2.4-2.3s2.1 1 2.1 2.3V18" />
                      <path d="M12 10v8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Collaboration Box */}
          <motion.div
            className="startup-box collaboration-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ delay: 0.1 }}
          >
            <div className="collaboration-header">
              <p className="collaboration-label">In Collaboration with</p>
              <h3>{founderInfo.name}</h3>
              <p className="founder-role">{founderInfo.role}</p>
            </div>

            <div className="founder-links">
              <a href={`https://www.instagram.com/${founderInfo.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" aria-label="Gokulkannan Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={`mailto:${founderInfo.email}`} aria-label="Gokulkannan Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="7.5" width="16" height="9" rx="2" />
                  <path d="m4 7.5 8 6 8-6" />
                </svg>
              </a>
              <a href={`https://${founderInfo.github}`} target="_blank" rel="noreferrer" aria-label="Gokulkannan GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18c-4 1.2-4-2-5-2" />
                  <path d="M15 22v-3.9c0-1 .4-1.9 1.1-2.5 3.4-1.1 5.9-4.8 5.9-9.1 0-1.9-.7-3.7-2-5.1C18.5 1.2 16.5 0 13.8 0c-1.7 0-3.3.5-4.6 1.7A9.5 9.5 0 0 0 6 7.4c0 4.3 2.5 8 5.9 9.1.7.6 1.1 1.4 1.1 2.5V22" />
                </svg>
              </a>
              <a href={`https://${founderInfo.linkedin}`} target="_blank" rel="noreferrer" aria-label="Gokulkannan LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v8" />
                  <path d="M8 7.5v.01" />
                  <path d="M12 18v-5.2c0-1.3 1.1-2.3 2.4-2.3s2.1 1 2.1 2.3V18" />
                  <path d="M12 10v8" />
                </svg>
              </a>
              <a href={`https://wa.me/${founderInfo.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Gokulkannan WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.4 3.7A10.8 10.8 0 0 0 4 18.9L3 21l2.3-1a10.8 10.8 0 0 0 15.1-15.3Z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
