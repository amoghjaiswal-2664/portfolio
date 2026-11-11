const items = [
  'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'Next.js',
  'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Python', 'LangGraph', 'LangChain',
  'LLMs','GenAi','RAG',
]

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center font-display text-3xl font-semibold text-muted sm:text-4xl">
          <span className="px-8">{item}</span>
          <span className="text-accent" aria-hidden="true">✦</span>
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="overflow-hidden border-y border-line py-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </section>
  )
}