export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] px-8 md:px-12 py-7 flex justify-between items-center">
      <a
        href="#"
        className="font-mono text-xs text-white/70 tracking-widest hover:text-white transition-colors"
      >
        rp — portfolio
      </a>

      <div className="flex items-center gap-10">
        <ul className="hidden md:flex gap-8 list-none">
          {['work', 'about', 'contact'].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="font-mono text-[11px] text-muted tracking-widest uppercase hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-muted">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          available for work
        </div>
      </div>
    </nav>
  )
}
