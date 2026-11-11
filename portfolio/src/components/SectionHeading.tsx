type Props = { number: string; title: string; id?: string }

export default function SectionHeading({ number, title, id }: Props) {
  return (
    <div className="mb-12 flex items-end gap-5 sm:mb-16">
      <span className="mb-2 font-mono text-sm text-accent sm:mb-4">{number}</span>
      <h2 id={id} className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
        {title}
      </h2>
      <span className="mb-3 hidden h-px flex-1 bg-line sm:mb-5 sm:block" aria-hidden="true" />
    </div>
  )
}