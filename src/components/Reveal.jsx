import { useEffect, useRef, useState, createElement } from 'react'

export default function Reveal({
  children,
  className = '',
  delay = '',
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => setVisible(true)

    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      const r = el.getBoundingClientRect()
      if (r.top < vh * 0.94 && r.bottom > 0) reveal()
    }

    revealInView()

    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              reveal()
              io.unobserve(en.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
      )
      io.observe(el)
    }

    window.addEventListener('scroll', revealInView, { passive: true })
    window.addEventListener('resize', revealInView)
    window.addEventListener('load', revealInView)

    const timeout = setTimeout(reveal, 2000)

    return () => {
      io?.disconnect()
      window.removeEventListener('scroll', revealInView)
      window.removeEventListener('resize', revealInView)
      window.removeEventListener('load', revealInView)
      clearTimeout(timeout)
    }
  }, [])

  const classes = ['reveal', delay, visible ? 'in' : '', className].filter(Boolean).join(' ')

  return createElement(Tag, { ref, className: classes, ...props }, children)
}
