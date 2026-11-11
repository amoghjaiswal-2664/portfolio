import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks, site } from '../data/site'
import Container from './Container'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3.5 font-display text-lg font-semibold sm:text-xl">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent font-mono text-base text-bg">
            {site.initials}
          </span>
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-5 py-3 text-base text-muted transition-colors hover:text-fg after:absolute after:inset-x-5 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 rounded-full border border-line px-6 py-3 text-base font-medium transition-colors hover:border-accent hover:text-accent-strong"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line md:hidden">
          <Container className="flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-lg text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}