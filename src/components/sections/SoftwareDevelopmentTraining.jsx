import CertificateButton from '../CertificateButton'
import SectionIntro from '../common/SectionIntro'
import { sdtTraining } from '../../data'

export default function SoftwareDevelopmentTraining() {
  return (
    <section className="sdt container">
      <SectionIntro eyebrow="10 / Software Development Training" title="Software Development Training (SDT)" />
      <div className="sdt-list">
        {sdtTraining.map((item, index) => (
          <div className="sdt-item" key={item.organization}>
            <div className="sdt-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="sdt-copy">
              <h3>{item.organization}</h3>
              <span className="sdt-specialization">[{item.specialization}]</span>
              <p>{item.description}</p>
              <CertificateButton url={item.certificateUrl} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
