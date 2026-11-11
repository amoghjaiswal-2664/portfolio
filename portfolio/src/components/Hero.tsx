import { ArrowRight, Mail } from 'lucide-react'
import { site } from '../data/site'
import Container from './Container'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

// Each chip: label, position classes, and a delay so they don't bob in sync.
const chips = [
  { label: 'React', position: 'top-6 -left-4 sm:-left-10', delay: '0s' },
  { label: 'TypeScript', position: 'top-1/3 -right-4 sm:-right-12', delay: '1.2s' },
  { label: 'Node.js', position: 'bottom-1/3 -left-6 sm:-left-14', delay: '2.4s' },
  { label: 'PostgreSQL', position: 'bottom-8 -right-2 sm:-right-8', delay: '0.6s' },
]

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pt-24 pb-12">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent-strong">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 [animation-duration:2s] motion-reduce:animate-none" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
            </span>
            Open for freelance work
          </p>

          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Hi, I'm
            <br />
            <span className="text-accent">{site.name}.</span>
          </h1>

          <p className="mt-8 font-display text-2xl text-muted sm:text-3xl">
            I build <span className="font-semibold text-fg">full-stack web apps</span> and AI-powered tools.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            CSE student at Medicaps University, {site.location}. I work with React,
            TypeScript, Node.js, PostgreSQL and LLM APIs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
            >
              See my work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
            >
              <Mail size={16} aria-hidden="true" /> Get in touch
            </a>
            {/* <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-3 text-sm text-muted transition-colors hover:text-fg"
            >
              GitHub
            </a> */}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-strong"
                >
              <FaGithub size={18} aria-hidden="true" />
            </a>
            {/* <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-3 text-sm text-muted transition-colors hover:text-fg"
            >
              LinkedIn
            </a> */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-strong"
            >
              <FaLinkedinIn size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right side: monogram card with floating chips */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm" aria-hidden="true">
          <div className="grid aspect-square place-items-center rounded-[2.5rem] border border-line bg-surface">
            <span className="font-display text-8xl font-bold text-accent sm:text-9xl">
              {site.initials}
            </span>
          </div>

          {chips.map((chip) => (
            <span
              key={chip.label}
              style={{ animationDelay: chip.delay }}
              className={`absolute ${chip.position} animate-float rounded-full border border-line bg-bg px-4 py-2 font-mono text-xs shadow-lg motion-reduce:animate-none`}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}