import { useEffect, useRef, useState } from 'react'

function formatNumber(n, decimals) {
  const dec = decimals | 0
  return (dec ? n.toFixed(dec) : Math.round(n)).toLocaleString('en-IN')
}

export default function CountUp({ value, decimals = 0, className = '' }) {
  const ref = useRef(null)
  const target = Number(value)
  const [display, setDisplay] = useState(() => formatNumber(0, decimals))

  useEffect(() => {
    const el = ref.current
    if (!el || Number.isNaN(target)) return

    let cancelled = false
    let rafId
    let observer
    let started = false

    const finish = () => {
      if (!cancelled) setDisplay(formatNumber(target, decimals))
    }

    const animate = () => {
      if (started || cancelled) return
      started = true

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        finish()
        return
      }

      const dec = decimals | 0
      const dur = 1400
      let t0 = null

      const step = (ts) => {
        if (cancelled) return
        if (!t0) t0 = ts
        const p = Math.min((ts - t0) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const val = target * eased
        setDisplay(formatNumber(val, dec))
        if (p < 1) {
          rafId = requestAnimationFrame(step)
        } else {
          finish()
        }
      }

      rafId = requestAnimationFrame(step)
    }

    const inView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      const r = el.getBoundingClientRect()
      return r.top < vh * 0.92 && r.bottom > 0
    }

    const startIfVisible = () => {
      if (started || cancelled) return
      if (inView()) animate()
    }

    startIfVisible()

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate()
              observer?.disconnect()
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
      )
      observer.observe(el)
    }

    window.addEventListener('scroll', startIfVisible, { passive: true })
    window.addEventListener('resize', startIfVisible)
    window.addEventListener('load', startIfVisible)

    const fallback = setTimeout(finish, 1800)

    return () => {
      cancelled = true
      observer?.disconnect()
      cancelAnimationFrame(rafId)
      clearTimeout(fallback)
      window.removeEventListener('scroll', startIfVisible)
      window.removeEventListener('resize', startIfVisible)
      window.removeEventListener('load', startIfVisible)
    }
  }, [target, decimals])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
