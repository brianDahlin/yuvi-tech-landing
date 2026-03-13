'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: string
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const containerRef = useRef<HTMLAnchorElement>(null)

  function handleMouseEnter() {
    const el = containerRef.current
    if (!el) return

    const chars = el.querySelectorAll<HTMLSpanElement>('.nav-char')

    // 1. Instantly hide — disable transition temporarily so the hide is instant
    chars.forEach((char) => {
      char.style.transition = 'none'
      char.style.opacity = '0'
    })

    // 2. Force reflow to commit the opacity:0 before re-enabling transition
    void el.offsetWidth

    // 3. Clear inline transition override (inherits transition-opacity from class)
    //    then set opacity:1 — each char fades in with its own transitionDelay
    chars.forEach((char) => {
      char.style.transition = ''
      char.style.opacity = '1'
    })
  }

  return (
    <a
      ref={containerRef}
      href={href}
      onMouseEnter={handleMouseEnter}
      className={cn(
        'nav-link-box flex flex-col justify-between min-w-[80px]',
        'border border-[rgba(255,255,255,0.10)]',
        'p-2',
        'hover:border-[rgba(255,255,255,0.30)]',
        'transition-[border-color] duration-200 cursor-pointer',
        className
      )}
    >
      {/* Dot — top-right */}
      <div className="flex justify-end">
        <div className="nav-dot w-1.5 h-1.5 rounded-full bg-[rgb(241,241,241)]" />
      </div>

      {/* Text — bottom-left */}
      <span
        className="font-[family-name:var(--font-mono)] text-[13px] tracking-[0.02em] text-[rgb(241,241,241)] whitespace-nowrap self-start"
        aria-label={children}
      >
        {children.split('').map((char, i) => (
          <span
            key={i}
            className="nav-char inline-block transition-opacity duration-75"
            style={{ transitionDelay: `${i * 20}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </a>
  )
}
