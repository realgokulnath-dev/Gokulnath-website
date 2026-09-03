import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionIntro from '../common/SectionIntro'
import ProjectLink from '../ProjectLink'
import { reveal } from '../../utils/animations'
import { projects } from '../../data'

export default function Work() {
  const groups = [
    ['personal', 'My Projects'],
    ['client', 'Freelancer Projects'],
    ['featured', 'Featured'],
  ]

  return (
    <section id="work" className="work section-band">
      <div className="container">
        <SectionIntro eyebrow="04 / Selected work" title="A few things I’ve made." />

        {groups.map(([group, label]) => {
          const groupProjects = projects.filter((project) => project.group === group)

          return (
            <div key={group} className="project-group">
              <div className="project-subsection-title">{label}</div>
              <div className="project-grid">
                {groupProjects.map((project, index) => (
                  <motion.article
                    className={project.featured ? 'project project-featured project-featured-client' : group === 'personal' && index === 0 ? 'project project-featured' : 'project'}
                    key={project.slug}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                  >
              <Link to={`/work/${project.slug}`} className="project-image">
                <img loading="lazy" src={project.image} alt={`${project.title} project interface`} />
                <span>
                  View case study <ArrowUpRight size={15} />
                </span>
              </Link>

              <div className="project-info">
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-year">{project.year}</span>
                <p>{project.description}</p>

                <div className="project-metadata">
                  <div className="project-rating-row">
                    <span className="project-rating">{project.rating}</span>
                    {project.status && <span className="project-status">{project.status}</span>}
                  </div>
                  <div className="tags">
                    {project.technologies.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.features.length > 0 && (
                    <div className="tags project-features">
                      {project.features.map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  )}
                </div>

                {project.clientReview && (
                  <div className="project-review-block">
                    <p>{project.clientReview}</p>
                    {(project.clientName || project.clientRole) && (
                      <strong>
                        {project.clientName} <span>— {project.clientRole}</span>
                      </strong>
                    )}
                  </div>
                )}

                <div className="project-link-block">
                  <ProjectLink url={project.projectUrl} label="View Project" fallback={project.status || 'Update Soon...'} />
                </div>
              </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
