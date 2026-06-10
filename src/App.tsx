import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Marquee } from './components/Marquee'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { About } from './sections/About'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="bg-bg text-white min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Contact />
      <footer className="px-8 md:px-12 py-6 border-t border-white/[0.07] flex justify-between items-center">
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase">
          © 2026 Rui Passos
        </p>
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase">
          Lisbon, Portugal
        </p>
      </footer>
    </div>
  )
}
