import { Mail } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { site } from '../data/site'
import Container from './Container'
import SectionHeading from './SectionHeading'

type Status = 'idle' | 'sending' | 'success' | 'error'

const FORM_ENDPOINT = 'https://formspree.io/f/mgaaobjq'

const services = [
  'Full-stack web apps',
  'React and TypeScript frontends',
  'REST APIs with Node.js and Express',
  'AI and LLM integrations',
]

const field =
  'w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none'

const iconLink =
  'grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-strong'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="contact-title" number="04" title="Let's build something" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              I'm open to freelance projects. Tell me what you need, and I'll get back to you by email.
            </p>

            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">What I can help with</p>
            <ul className="mt-4 space-y-2 text-fg">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
              >
                <Mail size={16} aria-hidden="true" /> {site.email}
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={iconLink}>
                <FaGithub size={18} aria-hidden="true" />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={iconLink}>
                <FaLinkedinIn size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm text-muted">Subject</label>
              <input id="subject" name="_subject" type="text" required className={field} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted">Message</label>
              <textarea id="message" name="message" rows={5} required className={`${field} resize-y`} />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <p role="status" className="text-sm">
              {status === 'success' && (
                <span className="text-accent-strong">Thanks! Your message was sent. I'll reply by email.</span>
              )}
              {status === 'error' && (
                <span className="text-red-400">
                  Something went wrong. Please email me directly at {site.email}.
                </span>
              )}
            </p>
          </form>
        </div>
      </Container>
    </section>
  )
}