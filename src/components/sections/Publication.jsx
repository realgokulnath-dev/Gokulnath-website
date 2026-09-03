import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionIntro from '../common/SectionIntro'
import CertificateButton from '../CertificateButton'
import { articles } from '../../data'

export default function Publication() {
  return (
    <section id="publication" className="insights section-band">
      <div className="container">
        <SectionIntro eyebrow="08 / Publication" title="Notes from the work." />
        <div className="article-grid">
          {articles.map((article) => (
            <div className="article" key={article.slug}>
              <Link className="article-card" to={`/publication/${article.slug}`}>
                <img loading="lazy" src={article.image} alt="" />
                <div className="article-body">
                  <span>
                    {article.category} · {article.read}
                  </span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <b>
                    Read article <ArrowUpRight size={14} />
                  </b>
                </div>
              </Link>
              {article.certificateUrl && (
                <div className="article-actions">
                  <CertificateButton url={article.certificateUrl} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
