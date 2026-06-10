import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML / CSS', level: 4 },
  { name: 'JavaScript', level: 3 },
  { name: 'Python / FastAPI', level: 3 },
  { name: 'Supabase', level: 3 },
  { name: 'Figma', level: 2 },
  { name: 'React', level: 2 },
  { name: 'Vercel / Netlify', level: 4 },
  { name: 'Datadog / Ops', level: 4 },
]

export function About() {
  return (
    <section
      id="about"
      className="px-8 md:px-12 py-28 bg-surface border-t border-b border-white/[0.07]"
    >
      <p className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-20 flex items-center gap-4 after:content-[''] after:h-px after:bg-white/[0.07] after:w-20">
        About
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28 items-start">
        {/* Text */}
        <div>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-[-0.02em] leading-[1.2] mb-12">
            I design and build websites that{' '}
            <em className="not-italic text-accent">actually ship.</em>
          </h2>
          <p className="font-mono text-[13px] text-muted leading-[2]">
            I'm <span className="text-white">Rui Passos</span>, a front-end
            developer and web designer based in{' '}
            <span className="text-white">Lisbon</span>.
            <br />
            <br />
            I take projects from idea to production — handling design,
            development and content management end-to-end. Every project on this
            page is a real client site, live on the web.
            <br />
            <br />
            By day I work as a{' '}
            <span className="text-white">NOC Analyst at Trustly</span>,
            monitoring critical financial infrastructure. That background means I
            take reliability, documentation and attention to detail seriously —
            in ops and in code.
            <br />
            <br />
            Currently deepening <span className="text-white">React</span> and{' '}
            <span className="text-white">TypeScript</span> and actively looking
            for the next step into full-time web development.
          </p>
        </div>

        {/* Skills */}
        <div>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex justify-between items-center py-4 border-b border-white/[0.07]"
            >
              <span className="font-mono text-[11px] text-muted tracking-widest uppercase">
                {skill.name}
              </span>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div
                    key={j}
                    className={`w-1.5 h-1.5 rounded-full ${
                      j < skill.level ? 'bg-accent' : 'bg-white/[0.13]'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
