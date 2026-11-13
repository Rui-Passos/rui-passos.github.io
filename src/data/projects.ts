export interface Project {
  id: string
  index: string
  title: string
  titleBreak?: boolean
  subtitle: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  status: 'live' | 'in-progress' | 'open-source' | 'portfolio'
}

export const projects: Project[] = [
  {
    id: 'weneedgsus',
    index: '01',
    title: 'weneedgsus',
    subtitle: 'pet-sitter website · client project',
    description:
      'Website for a pet sitter, with booking requests, photo gallery and Instagram feed integration. I handled the visual design and the front-end, and moved the project from Lovable to Vercel. The client decided not to launch it, so it lives on as a demo.',
    tags: ['React', 'TypeScript', 'Supabase', 'Vercel'],
    liveUrl: 'https://weneedgsus.vercel.app',
    githubUrl: 'https://github.com/Rui-Passos/weneedgsus',
    status: 'live',
  },
  {
    id: 'mare',
    index: '02',
    title: 'Maré Surf School',
    subtitle: 'booking app · in progress (paused)',
    description:
      'Booking site for a fictional surf school in Costa da Caparica. So far: Postgres schema on Supabase with constraints, indexes and row level security. Planned: booking flow with capacity rules enforced in the database, Stripe Checkout (test mode) and automated tests.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/Rui-Passos/mare-surf-school',
    status: 'in-progress',
  },
  {
    id: 'barbearia',
    index: '03',
    title: 'Barbearia do Bairro',
    subtitle: 'barbershop website · alfornelos · in progress',
    description:
      'Website for a local barbershop with a back-office panel to manage photos, text and services, backed by Supabase.',
    tags: ['HTML', 'CSS', 'JS', 'Supabase'],
    status: 'in-progress',
  },
  {
    id: 'noc-ping',
    index: '04',
    title: 'NOC Ping Checker',
    subtitle: 'full-stack network tool · open source',
    description:
      'Web interface for network diagnostics via ping commands. Python FastAPI back-end with REST API and CORS. My first full-stack project built from scratch.',
    tags: ['Python', 'FastAPI', 'REST API', 'HTML', 'JS'],
    githubUrl: 'https://github.com/Rui-Passos/First-Full-Stack-Project',
    status: 'open-source',
  },
  {
    id: 'portfolio',
    index: '05',
    title: 'Personal Portfolio',
    subtitle: 'this page · github pages',
    description:
      'Responsive personal page, dark and minimal, with scroll animations. Deployed to GitHub Pages with GitHub Actions.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    githubUrl: 'https://github.com/Rui-Passos/rui-passos.github.io',
    status: 'portfolio',
  },
]
