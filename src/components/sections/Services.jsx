import { MoveUpRight } from 'lucide-react'
import SectionIntro from '../common/SectionIntro'
import { services } from '../../data'

export default function Services() {
  return (
    <section className="services container">
      <SectionIntro eyebrow="06 / How I Work" title="Useful by design." />
      <div className="service-list">
        {services.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#contact" className="service-link" aria-label={`Contact for ${title}`}>
              <MoveUpRight size={19} />
            </a>
          </article>
        ))}
      </div>

      <div className="workflow-visual" style={{ marginTop: '32px' }}>
        <img src={`${import.meta.env.BASE_URL}work.png`} alt="Workflow process" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
    </section>
  )
}
