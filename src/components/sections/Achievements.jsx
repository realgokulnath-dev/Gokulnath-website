import SectionIntro from '../common/SectionIntro'
import CertificateButton from '../CertificateButton'
import { achievements, courseCertifications, conferenceCertifications } from '../../data'

function ChampionMark() {
  return (
    <svg className="champion-mark" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M20 18h24v6l-3.4 3.8c1.2 1.7 1.8 3.6 1.8 5.6v.8c0 5.3-4.3 9.6-9.6 9.6h-1.6c-5.3 0-9.6-4.3-9.6-9.6v-.8c0-2 .6-3.9 1.8-5.6L20 24v-6Zm4 0V12h16v6M24 42h16l2.5 8H21.5L24 42Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 32.5c1.5 1.7 3.6 2.7 6 2.7s4.5-1 6-2.7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function Achievements() {
  return (
    <section className="recognition section-band">
      <div className="container recognition-standalone">
        <div className="achievement-highlight">
          <div className="achievement-symbol-wrap">
            <ChampionMark />
          </div>
          <p className="achievement-label">Achievement</p>
          <div className="achievement-card">
            <SectionIntro eyebrow="07 / Recognition" title="Signals of good work." />
            <div className="recognition-list">
              {achievements.map(([year, title, detail]) => (
                <div key={title}>
                  <span>{year}</span>
                  <b>{title}</b>
                  <small>{detail}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="certs-grid">
          <div className="certs certs-left">
            <span className="eyebrow">Course Completion</span>
            <div className="cert-category">
              {courseCertifications.map((item) => (
                <div key={item.title} className="cert-item">
                  <b>{item.title}</b>
                  <span>{item.organization}</span>
                  <CertificateButton url={item.certificateUrl} />
                </div>
              ))}
            </div>
          </div>

          <div className="certs certs-right">
            <span className="eyebrow">International Conference</span>
            <div className="cert-category">
              {conferenceCertifications.map((item) => (
                <div key={item.title} className="cert-item">
                  <b>{item.title}</b>
                  <span>{item.organization}</span>
                  <CertificateButton url={item.certificateUrl} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
