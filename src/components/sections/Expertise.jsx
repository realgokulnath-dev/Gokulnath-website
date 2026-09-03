import { Check } from 'lucide-react'
import SectionIntro from '../common/SectionIntro'
import { skills } from '../../data'

export default function Expertise() {
  return (
    <section id="expertise" className="expertise container">
      <SectionIntro eyebrow="03 / Expertise" title="Depth, with range." />
      <div className="skill-list">
        {skills.map((skill) => (
          <article className="skill" key={skill.number}>
            <span className="skill-number">{skill.number}</span>
            <div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </div>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>
                  <Check size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
