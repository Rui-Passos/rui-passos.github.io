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
  status: 'live' | 'open-source' | 'portfolio'
}

export const projects: Project[] = [
  {
    id: 'barbearia',
    index: '01',
    title: 'Barbearia do Bairro',
    subtitle: 'barbershop website · alfornelos · live',
    description:
      'Full website with integrated back-office admin panel for content management — photos, text and services — backed by Supabase. Continuous deploy on Netlify. Real client, live in production.',
    tags: ['HTML', 'CSS', 'JS', 'Supabase', 'Netlify'],
    githubUrl: 'https://github.com/Rui-Passos',
    status: 'live',
  },
  {
    id: 'weneedgsus',
    index: '02',
    title: 'weneedgsus.pt',
    subtitle: 'pet-sitter website · live',
    description:
      'Booking system, photo gallery and Instagram feed integration. Responsible for both visual design and front-end development. Migrated from Lovable to Vercel with a custom domain.',
    tags: ['Vercel', 'Booking', 'Custom domain'],
    liveUrl: 'https://weneedgsus.lovable.app',
    status: 'live',
  },
  {
    id: 'noc-ping',
    index: '03',
    title: 'NOC Ping Checker',
    subtitle: 'full-stack network tool · open source',
    description:
      'Web interface for network diagnostics via ping commands. Python FastAPI back-end with REST API and CORS. First full-stack project built from scratch during career transition.',
    tags: ['Python', 'FastAPI', 'REST API', 'HTML', 'JS'],
    githubUrl: 'https://github.com/Rui-Passos/First-Full-Stack-Project',
    status: 'open-source',
  },
  {
    id: 'portfolio',
    index: '04',
    title: 'Personal Portfolio',
    subtitle: 'this page · github pages',
    description:
      'Responsive personal page designed and coded from scratch. Dark, minimal, with scroll animations. Published on GitHub Pages.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    githubUrl: 'https://github.com/Rui-Passos/PaginaPessoal',
    status: 'portfolio',
  },
]
