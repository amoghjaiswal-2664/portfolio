import { site } from '../data/site'
import Container from './Container'
import SectionHeading from './SectionHeading'

const facts = [
  { label: 'Based in', value: site.location },
  { label: 'Education', value: site.education },
  { label: 'Focus', value: 'Full-stack web and AI apps' },
  { label: 'Availability', value: 'Open for freelance work' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="about-title" number="03" title="About me" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            {/* TODO: rewrite this line in your own words */}
            <p className="font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
              I like building things that <span className="text-accent">work end to end</span>:
              the interface, the API and the data behind it.
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I'm a Computer Science and Engineering student at Medicaps University,
                Indore, working toward my B.Tech.
              </p>
              <p>
                I build full-stack web apps with React, TypeScript, Node.js and PostgreSQL,
                and I'm interested in AI-powered applications. My recent projects include an
                AI coding agent, a RAG-based fitness chatbot and a computer-use agent.
              </p>
              <p>
                I'm available for freelance projects. The quickest way to reach me is email.
              </p>
            </div>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-line bg-surface p-5">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">{fact.label}</dt>
                <dd className="mt-2 font-display text-lg font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}