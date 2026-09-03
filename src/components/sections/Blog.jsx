import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionIntro from '../common/SectionIntro'
import { blogPosts } from '../../data'
import { reveal } from '../../utils/animations'

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const currentBlog = blogPosts[currentIndex]

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const handlePrev = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  const handleNext = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length)
  }

  return (
    <section id="blog" className="blog section-band">
      <div className="container">
        <SectionIntro eyebrow="09 / Blog" title="Insights and Stories." />

        <motion.div
          className="blog-slider"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <div className="blog-grid">
            {/* Image Side */}
            <div className="blog-image-side">
              <motion.div
                className="blog-image-wrapper"
                key={`image-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={currentBlog.image} alt={currentBlog.title} />
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="blog-content-side">
              <motion.div
                className="blog-content"
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <h2>{currentBlog.title}</h2>
                <p>{currentBlog.description}</p>

                <div className="blog-indicators">
                  {blogPosts.map((_, idx) => (
                    <button
                      key={idx}
                      className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => {
                        setAutoPlay(false)
                        setCurrentIndex(idx)
                      }}
                      aria-label={`Go to blog ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <div className="blog-controls">
                <button className="blog-arrow blog-prev" onClick={handlePrev} aria-label="Previous blog">
                  <ChevronLeft size={20} />
                </button>
                <button className="blog-arrow blog-next" onClick={handleNext} aria-label="Next blog">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
