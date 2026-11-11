export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT auth', 'Prisma ORM'],
  },
  {
    title: 'AI & LLM',
    items: ['LLM integrations', 'RAG', 'LangGraph', 'LangChain', 'OpenAI API', 'Groq', 'Vercel AI SDK'],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'Astra DB (vector)'],
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'Bun', 'npm workspaces', 'Vitest', 'Cloudflare R2'],
  },
]