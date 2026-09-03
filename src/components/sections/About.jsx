import SectionIntro from '../common/SectionIntro'

export default function About() {
  return (
    <section id="about" className="about container">
      <div className="about-image">
        <img
          loading="lazy"
          src="public\abt.jpeg"
          alt="A collaborative software team in a studio"
        />
        <span>
          Work is better<br />
          when it is shared.
        </span>
      </div>

      <div className="about-copy">
        <SectionIntro eyebrow="01 / About" title="A little context." />
        <p className="large-copy">
          Motivated and detail-oriented Information Technology student with hands-on
          experience in Full-Stack Web Development using React.js, Node.js, Express.js,
          and MongoDB, and also skilled in Backend engineering with Python, FastAPI,
          PostgreSQL, and SQLAlchemy.
        </p>
        <p>
          Skilled in building responsive and scalable web applications, REST APIs, and
          database-driven systems. Strong problem-solving abilities with a passion for
          software development and learning emerging technologies. Seeking an opportunity
          to contribute technical expertise and grow as a Software Developer.
        </p>
        <div className="stats">
          <div>
            <b>B.Tech - IT</b>
            <span>Adithya Institute of Technology,Coimbatore</span>
          </div>
          <div>
            <b>7.61</b>
            <span>Current CGPA</span>
          </div>
          <div>
            <b>79.33%</b>
            <span>HSC Percentage</span>
          </div>
        </div>
      </div>
    </section>
  )
}
