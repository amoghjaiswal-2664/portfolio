import { skillGroups } from '../data/Skills'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="skills-title" number="02" title="Skills & toolkit" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-line bg-surface p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <h3 className="font-display text-xl font-bold">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}