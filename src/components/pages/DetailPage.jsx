import { Link, useLocation } from 'react-router-dom'
import Nav from '../common/Nav'
import { articles, projects } from '../../data'

export default function DetailPage({ kind }) {
  const location = useLocation()
  const item =
    kind === 'project'
      ? projects.find((p) => location.pathname.endsWith(p.slug))
      : articles.find((a) => location.pathname.endsWith(a.slug))

  return (
    <>
      <Nav />
      <main className="detail container">
        <Link className="back" to="/">
          ← Back to index
        </Link>
        <span className="eyebrow">{kind === 'project' ? 'Selected work' : item.category}</span>
        <h1>{item.title}</h1>
        <p className="detail-lede">{item.description || item.excerpt}</p>
        <img className="detail-image" src={item.image} alt="" />
        <div className="detail-body">
          <h2>The work, in context.</h2>
          <p>
            Good work starts with listening closely. This project brought together product
            thinking, systems design, and a team willing to stay curious through the hard
            parts.
          </p>
          <p>
            The result is software that earns its place in someone’s day: clear enough to
            use immediately, sturdy enough to grow with the people behind it.
          </p>
        </div>
      </main>
    </>
  )
}
