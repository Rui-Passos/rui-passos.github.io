import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="work" className="px-8 md:px-12 py-28">
      <p className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-20 flex items-center gap-4 after:content-[''] after:h-px after:bg-white/[0.07] after:w-20">
        Selected work
      </p>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0 border-t border-white/[0.07] py-16 last:border-b group"
          >
            {/* Left: index + tags */}
            <div className="md:pr-12 mb-8 md:mb-0">
              <p className="font-mono text-[11px] text-muted tracking-[0.1em] mb-6">
                {project.index}
              </p>
              <div className="flex flex-row md:flex-col gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-muted tracking-[0.08em] uppercase border border-white/[0.07] px-2.5 py-1.5 group-hover:border-white/[0.12] group-hover:text-white/50 transition-all duration-200 w-fit"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: content */}
            <div>
              <h2 className="text-[clamp(36px,5vw,72px)] font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
                {project.liveUrl || project.githubUrl ? (
                  <a
                    href={project.liveUrl ?? project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>

              <p className="font-mono text-[12px] text-accent tracking-[0.05em] mb-5">
                {project.subtitle}
              </p>

              <p className="font-mono text-[12px] text-muted leading-[1.9] max-w-xl mb-8">
                {project.description}
              </p>

              <div className="flex gap-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-white tracking-widest border-b border-white/[0.07] pb-1 inline-flex items-center gap-2.5 hover:text-accent hover:border-accent transition-all duration-200 hover:gap-4"
                  >
                    Visit live site →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-white tracking-widest border-b border-white/[0.07] pb-1 inline-flex items-center gap-2.5 hover:text-accent hover:border-accent transition-all duration-200 hover:gap-4"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
