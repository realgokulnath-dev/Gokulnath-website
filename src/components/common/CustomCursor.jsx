import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const MAX_PARTICLES = 34
const PARTICLE_CHARS = ['✦', '✧', '·', '•']

function isCursorDevice() {
  return window.matchMedia('(pointer: fine)').matches && navigator.maxTouchPoints === 0
}

function createParticle(container, x, y, burst = false) {
  if (container.childElementCount >= MAX_PARTICLES) return

  const particle = document.createElement('span')
  const isStar = burst || Math.random() > 0.58
  const size = isStar ? 7 + Math.random() * 4 : 2 + Math.random() * 2
  const driftX = (Math.random() - 0.5) * (burst ? 46 : 18)
  const driftY = (Math.random() - 0.5) * (burst ? 46 : 18)

  particle.className = `custom-cursor-particle${isStar ? ' is-star' : ''}`
  particle.textContent = isStar ? PARTICLE_CHARS[Math.floor(Math.random() * 2)] : PARTICLE_CHARS[2 + Math.floor(Math.random() * 2)]
  particle.style.left = `${x}px`
  particle.style.top = `${y}px`
  particle.style.setProperty('--particle-size', `${size}px`)
  particle.style.setProperty('--drift-x', `${driftX}px`)
  particle.style.setProperty('--drift-y', `${driftY}px`)
  particle.style.animationDuration = `${burst ? 420 : 560 + Math.random() * 280}ms`
  container.appendChild(particle)
  particle.addEventListener('animationend', () => particle.remove(), { once: true })
}

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const particleLayerRef = useRef(null)

  useEffect(() => {
    if (!isCursorDevice()) return undefined

    const cursor = cursorRef.current
    const particleLayer = particleLayerRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let animationFrame
    let lastParticleTime = 0
    let hovering = false

    const updateCursor = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      cursor.classList.add('is-visible')

      const interactive = event.target.closest('a, button, input, textarea, select, [role="button"], .project, .project-image')
      if (Boolean(interactive) !== hovering) {
        hovering = Boolean(interactive)
        cursor.classList.toggle('is-hovering', hovering)
      }

      if (!reducedMotion && event.timeStamp - lastParticleTime > 34) {
        lastParticleTime = event.timeStamp
        createParticle(particleLayer, targetX, targetY)
      }
    }

    const createClickBurst = (event) => {
      if (reducedMotion) return
      for (let index = 0; index < 6; index += 1) {
        createParticle(particleLayer, event.clientX, event.clientY, true)
      }
    }

    const render = () => {
      currentX += (targetX - currentX) * 0.22
      currentY += (targetY - currentY) * 0.22
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      animationFrame = requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', updateCursor, { passive: true })
    window.addEventListener('pointerdown', createClickBurst, { passive: true })
    animationFrame = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pointermove', updateCursor)
      window.removeEventListener('pointerdown', createClickBurst)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="custom-cursor-layer" aria-hidden="true">
      <div className="custom-cursor-particles" ref={particleLayerRef} />
      <div className="custom-cursor" ref={cursorRef} />
    </div>
  )
}
