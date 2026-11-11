import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import type { Project } from '../data/project'

type Props = { project: Project; index: number }

export default function ProjectCard({ project, index }: Props) {
  const Icon = project.icon

  return (
    // <article className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/60">
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 ease-out hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">  
      <div className="relative grid h-44 place-items-center border-b border-line bg-bg">
        <span className="absolute left-5 top-5 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
        <Icon size={56} strokeWidth={1.25} className="text-accent transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted">
          <span>{project.category}</span>
          {project.status && (
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">{project.status}</span>
          )}
        </div>

        <h3 className="mt-3 font-display text-2xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-accent-strong">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-3 pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent"
          >
            <FaGithub size={16} aria-hidden="true" /> View code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
            >
              Live demo <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}