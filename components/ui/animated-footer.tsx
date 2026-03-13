'use client'

import React, { useEffect, useRef, useState } from 'react'

interface LinkItem {
  href: string
  label: string
}

interface AnimatedFooterProps {
  topSlot?: React.ReactNode
  leftLinks: LinkItem[]
  rightLinks: LinkItem[]
  copyrightText: string
  barCount?: number
}

export function AnimatedFooter({
  topSlot,
  leftLinks,
  rightLinks,
  copyrightText,
  barCount = 23,
}: AnimatedFooterProps) {
  const waveRefs = useRef<(HTMLDivElement | null)[]>([])
  const footerRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    const el = footerRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  useEffect(() => {
    let t = 0

    const animateWave = () => {
      let offset = 0
      waveRefs.current.forEach((el, index) => {
        if (el) {
          offset += Math.max(0, 20 * Math.sin((t + index) * 0.3))
          el.style.transform = `translateY(${index + offset}px)`
        }
      })
      t += 0.1
      animationFrameRef.current = requestAnimationFrame(animateWave)
    }

    if (isVisible) {
      animateWave()
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [isVisible])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white relative flex flex-col w-full justify-between select-none overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8 pt-12 pb-10">
        {/* Optional brand / top content */}
        {topSlot && <div>{topSlot}</div>}

        {/* Links row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left links */}
          <div className="space-y-3">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-mono)] text-xs text-white/50 uppercase tracking-widest hover:text-[#E8622A] transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-[family-name:var(--font-mono)] text-xs text-white/30 flex items-center gap-1.5 mt-2">
              <span>©</span>
              {copyrightText}
            </p>
          </div>

          {/* Right links */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-mono)] text-xs text-white/50 uppercase tracking-widest hover:text-[#E8622A] transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToTop}
              className="font-[family-name:var(--font-mono)] text-xs text-white/30 uppercase tracking-widest hover:text-[#E8622A] transition-colors inline-flex items-center gap-1.5 min-h-[44px]"
            >
              ↑ Наверх
            </button>
          </div>
        </div>
      </div>

      {/* Animated wave bars */}
      <div aria-hidden="true" style={{ overflow: 'hidden', height: 200 }}>
        <div style={{ marginTop: 0 }}>
          {Array.from({ length: barCount }).map((_, index) => (
            <div
              key={index}
              ref={(el) => { waveRefs.current[index] = el }}
              style={{
                height: `${index + 1}px`,
                backgroundColor: '#E8622A',
                opacity: 0.15 + (index / barCount) * 0.85,
                transition: 'transform 0.1s ease',
                willChange: 'transform',
                marginTop: '-2px',
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
