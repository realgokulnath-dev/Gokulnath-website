import { motion } from 'framer-motion'
import SectionIntro from '../common/SectionIntro'
import CertificateButton from '../CertificateButton'
import ProjectLink from '../ProjectLink'
import { reveal } from '../../utils/animations'
import { experiences } from '../../data'

export default function Experience() {
  return (
    <section id="experience" className="experience section-band">
      <div className="container">
        <SectionIntro eyebrow="02 / Experience" title="The long view." />
        <div className="timeline">
          {experiences.map((item) => (
            <motion.article
              key={`${item.company}-${item.year}`}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={reveal}
            >
              <div className="timeline-meta">
                <span>{item.year}</span>
                <b>{item.accent}</b>
              </div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <div className="company">
                  {item.company} <span>· {item.location}</span>
                </div>
                <p>{item.description}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {(item.certificateUrl || item.projectUrl) && (
                  <div className="timeline-actions">
                    {item.certificateUrl && <CertificateButton url={item.certificateUrl} />}
                    {item.projectUrl && <ProjectLink url={item.projectUrl} label="View Project" />}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
