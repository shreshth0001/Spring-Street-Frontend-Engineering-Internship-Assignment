'use client'
import { useEffect, useRef } from 'react'

/**
 * Attach to any section container. All direct/nested children
 * with className="reveal" will animate in with staggered delay
 * once the container enters the viewport.
 */
export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll<HTMLElement>('.reveal')
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 85)
          })
          obs.unobserve(el)
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
