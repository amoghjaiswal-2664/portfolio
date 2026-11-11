import { Bot, Dumbbell, Terminal, type LucideIcon } from 'lucide-react'

export type Project = {
  title: string
  tagline: string
  description: string
  tech: string[]
  github: string
  icon: LucideIcon
  category: string
  demo?: string // only add once the site is deployed and you've checked it works
  status?: string
}

export const projects: Project[] = [
  {
    title: 'Qinser',
    tagline: 'An AI coding agent that works on your machine',
    description:
      'A chat-based coding agent that can read, write and edit files, search a codebase and run terminal commands. Conversations are saved in PostgreSQL so it remembers earlier sessions.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'LangGraph', 'Groq', 'PostgreSQL'],
    github: 'https://github.com/amoghjaiswal-2664/quinser_coding-agent',
    icon: Terminal,
    category: 'AI agent',
  },
  {
    title: 'FitGPT',
    tagline: 'A fitness coach that answers from real sources',
    description:
      'A chat app where an AI fitness coach retrieves relevant content from a vector database before answering (RAG). A seed script scrapes pages, splits them into chunks and stores their embeddings.',
    tech: ['Next.js', 'React', 'TypeScript', 'OpenAI', 'LangChain', 'Astra DB'],
    github: 'https://github.com/amoghjaiswal-2664/FitGPT',
    icon: Dumbbell,
    category: 'AI / RAG',
  },
  {
    title: 'Computer Use Agent',
    tagline: 'An AI agent that operates a computer',
    description:
      'A Python agent that takes instructions in natural language and works a computer on your behalf by looking at the screen and acting step by step.',
    tech: ['Python'],
    github: 'https://github.com/amoghjaiswal-2664/computer-use-agent',
    icon: Bot,
    category: 'AI agent',
    status: 'In progress',
  },
]