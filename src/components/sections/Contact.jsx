import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SectionIntro from '../common/SectionIntro'
import { profile } from '../../data'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.currentTarget

    setSending(true)
    setSent(false)
    setError('')

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      console.log('EmailJS Success:', response)

      // Email was successfully sent
      setError('')
      setSent(true)

      // Clear form only after successful send
      form.reset()

      // Return button to normal state after 4 seconds
      setTimeout(() => {
        setSent(false)
      }, 4000)
    } catch (err) {
      console.error('EmailJS Error:', err)

      setSent(false)
      setError('Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact container">
      <div>
        <SectionIntro
          eyebrow="11 / Contact"
          title={
            <>
              Let&apos;s build something
              <br />
              <em>meaningful.</em>
            </>
          }
        />

        <p className="contact-note">
          Have a product to shape, a system to untangle, or simply a good question? I’d like
          to hear about it.
        </p>

        <div className="contact-details">
          <a href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight size={14} />
          </a>

          <span>{profile.location}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            required
            name="name"
            placeholder="Your name"
          />
        </label>

        <label>
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="you@company.com"
          />
        </label>

        <label>
          What can I help with?
          <textarea
            required
            name="message"
            rows="3"
            placeholder="Tell me a little about the work..."
          />
        </label>

        {error && !sent && (
          <p className="contact-error">
            {error}
          </p>
        )}

        <button
          className="button button-primary"
          type="submit"
          disabled={sending}
        >
          {sent ? (
            <>
              Message sent <Check size={16} />
            </>
          ) : sending ? (
            <>
              Sending...
            </>
          ) : (
            <>
              Send inquiry <ArrowUpRight size={16} />
            </>
          )}
        </button>
      </form>
    </section>
  )
}