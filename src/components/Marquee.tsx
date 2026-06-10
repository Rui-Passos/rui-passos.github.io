import { motion } from 'framer-motion'

const ITEMS = Array(6).fill("Let's build something real — ")

export function Marquee() {
  return (
    <div className="overflow-hidden border-t border-b border-white/[0.07] py-5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-muted pr-12 flex-shrink-0"
          >
            {item.replace('real', '')}
            <em className="not-italic text-accent">real</em>
            {' '}—{' '}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
