import { ArrowUp, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { site } from '../data/site'
import Container from './Container'

const year = new Date().getFullYear()

const iconLink =
  'grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-strong'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-center justify-between gap-5 text-sm text-muted sm:flex-row">
        <p>© {year} {site.name}</p>

        <nav aria-label="Footer" className="flex items-center gap-3">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={iconLink}>
            <FaGithub size={16} aria-hidden="true" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={iconLink}>
            <FaLinkedinIn size={16} aria-hidden="true" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Send an email" className={iconLink}>
            <Mail size={16} aria-hidden="true" />
          </a>
        </nav>

        <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </Container>
    </footer>
  )
}