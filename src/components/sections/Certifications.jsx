import SectionIntro from '../common/SectionIntro'
import { certifications } from '../../data'

export default function Certifications() {
  return (
    <section className="recognition section-band">
      <div className="container recognition-grid">
        <div>
          <SectionIntro eyebrow="06 / Recognition" title="Signals of good work." />
        </div>

        <div className="certs">
          <span className="eyebrow">Credentials</span>
          <h3>
            Always learning,
            <br />
            <em>still curious.</em>
          </h3>
          {certifications.map(([name, org, year]) => (
            <div key={name}>
              <b>{name}</b>
              <span>
                {org} · {year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
