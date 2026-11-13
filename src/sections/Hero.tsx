import { motion } from 'framer-motion'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
})

export function Hero() {
  return (
    <section className="min-h-screen grid grid-rows-[1fr_auto] px-8 md:px-12 pt-28 pb-12">
      {/* Title */}
      <div className="flex flex-col justify-center">
        <motion.p
          {...fade(0.1)}
          className="font-mono text-[11px] text-muted tracking-[0.15em] uppercase mb-8 flex items-center gap-4 before:content-[''] before:w-8 before:h-px before:bg-muted"
        >
          Lisbon, Portugal · 2026
        </motion.p>

        <motion.h1
          {...fade(0.25)}
          className="text-[clamp(64px,10vw,130px)] font-extrabold leading-[0.9] tracking-[-0.04em]"
        >
          Front<span className="text-accent">-</span>end
          <br />
          <span className="text-outline">Developer</span>
          <br />
          <span className="text-accent">&amp;</span> Designer
        </motion.h1>
      </div>

      {/* Bottom bar */}
      <motion.div
        {...fade(0.4)}
        className="flex flex-col md:flex-row justify-between items-start md:items-end pt-12 mt-12 border-t border-white/[0.07] gap-8"
      >
        <p className="font-mono text-[13px] text-muted leading-[1.9] max-w-xs">
          Building websites
          <br />
          from first sketch to live deploy.
          <br />
          <span className="text-white">Former NOC Analyst at Trustly.</span>
        </p>

        <div className="flex flex-col items-start md:items-end gap-3">
          <a
            href="#work"
            className="font-mono text-[11px] tracking-widest uppercase px-7 py-3.5 border border-white/[0.13] text-white hover:bg-accent hover:text-bg hover:border-accent transition-all duration-200"
          >
            View work
          </a>
          <p className="font-mono text-[10px] text-muted tracking-widest uppercase">
            ↓ scroll
          </p>
        </div>
      </motion.div>
    </section>
  )
}
