import { projects } from '../data/project'
import { site } from '../data/site'
import Container from './Container'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading id="projects-title" number="01" title="Selected projects" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <p className="mt-10 text-muted">
          More experiments on{' '}
          <a href={site.github} target="_blank" rel="noreferrer" className="font-medium text-fg underline decoration-accent underline-offset-4 hover:text-accent-strong">
            GitHub
          </a>
        </p>
      </Container>
    </section>
  )
}