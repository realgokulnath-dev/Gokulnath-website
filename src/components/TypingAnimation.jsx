import { useEffect, useState } from 'react'

export default function TypingAnimation({ titles = [] }) {
  const [displayText, setDisplayText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentTitle = titles[titleIndex] || ''
  const typingSpeed = 50
  const deletingSpeed = 30
  const pauseTime = 2000

  useEffect(() => {
    if (titles.length === 0) return

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentTitle.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, titleIndex, currentTitle, titles])

  return (
    <span className="typing-animation">
      {displayText}
      <span className="typing-cursor" />
    </span>
  )
}
