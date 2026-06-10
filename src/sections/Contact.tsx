export function Contact() {
  const links = [
    { label: 'passos.rui@gmail.com', href: 'mailto:passos.rui@gmail.com', tag: 'email →' },
    { label: 'linkedin.com/in/rui-passos', href: 'https://linkedin.com/in/rui-passos', tag: 'linkedin →' },
    { label: 'github.com/Rui-Passos', href: 'https://github.com/Rui-Passos', tag: 'github →' },
  ]

  return (
    <div id="contact" className="px-8 md:px-12 py-28">
      <p className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-20 flex items-center gap-4 after:content-[''] after:h-px after:bg-white/[0.07] after:w-20">
        Contact
      </p>

      <a
        href="mailto:passos.rui@gmail.com"
        className="block text-[clamp(28px,6vw,88px)] font-extrabold tracking-[-0.03em] leading-none text-muted hover:text-accent transition-colors duration-300 mb-20 pt-16 border-t border-white/[0.07]"
      >
        passos.rui
        <br />
        @gmail.com
      </a>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 flex-wrap">
        <div className="flex flex-col gap-0 w-full md:w-auto">
          {links.map(({ label, href, tag }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex justify-between items-center py-5 border-b border-white/[0.07] font-mono text-[13px] text-muted hover:text-white hover:pl-3 transition-all duration-200 md:min-w-[480px]"
            >
              {label}
              <span className="text-white/[0.13] text-[11px] ml-8">{tag}</span>
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px] text-muted tracking-[0.08em]">
          Based in Lisbon · Open to hybrid &amp; remote
        </p>
      </div>
    </div>
  )
}
