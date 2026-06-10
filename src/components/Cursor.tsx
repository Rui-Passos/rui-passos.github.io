import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      dotRef.current?.classList.add('scale-[2.5]')
      ringRef.current?.classList.add('!w-12', '!h-12')
    }
    const onLeaveLink = () => {
      dotRef.current?.classList.remove('scale-[2.5]')
      ringRef.current?.classList.remove('!w-12', '!h-12')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 md:block hidden"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-accent/35 rounded-full pointer-events-none z-[9998] transition-[width,height] duration-300 md:block hidden"
      />
    </>
  )
}
