'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { YuViLogo } from '@/components/layout/Logo'
import { useScroll } from '@/components/ui/use-scroll'
import { CONTACT_EMAIL, NAV_LINKS } from '@/constants/content'
import { GradientButton } from '@/components/ui/gradient-button'
import {
  User,
  CheckCircle2,
  Briefcase,
  Cpu,
  Package,
  Settings2,
  LucideIcon,
} from 'lucide-react'

const NAV_ICON_MAP: Record<string, LucideIcon> = {
  '#about':        User,
  '#why-us':       CheckCircle2,
  '#cases':        Briefcase,
  '#technologies': Cpu,
  '#products':     Package,
  '#how-we-work':  Settings2,
}

export default function Header() {
  const scrolled = useScroll(10)
  const [activeTab, setActiveTab] = useState<string>(NAV_LINKS[0].href)

  return (
    <>
      {/* ── Top bar ──────────────────────────────────── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[60px] transition-colors duration-200',
          scrolled
            ? 'bg-black/90 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="relative flex items-center justify-between h-full px-6 md:px-10 max-w-7xl mx-auto">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 shrink-0">
            <YuViLogo size={30} />
            <div className="flex flex-col leading-tight">
              <span className="font-[family-name:var(--font-display)] font-bold text-[17px] leading-none text-white">
                YuVi Tech
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/50 mt-0.5 hidden sm:block">
                AI &amp; Intelligent Data Systems
              </span>
            </div>
          </a>

          {/* ── Tubelight pill — desktop center ── */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              {NAV_LINKS.map((link) => {
                const Icon = NAV_ICON_MAP[link.href] ?? User
                const isActive = activeTab === link.href

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveTab(link.href)}
                    className={cn(
                      'relative cursor-pointer font-[family-name:var(--font-mono)] text-[12px] tracking-wide px-4 py-1.5 rounded-full transition-colors whitespace-nowrap',
                      isActive
                        ? 'text-[#E8622A]'
                        : 'text-white/70 hover:text-white'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full rounded-full -z-10"
                        style={{ background: 'rgba(232,98,42,0.08)' }}
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        {/* Tubelight glow */}
                        <div
                          className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                          style={{ background: '#E8622A' }}
                        >
                          <div
                            className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2"
                            style={{ background: 'rgba(232,98,42,0.25)' }}
                          />
                          <div
                            className="absolute w-8 h-6 rounded-full blur-md -top-1"
                            style={{ background: 'rgba(232,98,42,0.20)' }}
                          />
                          <div
                            className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2"
                            style={{ background: 'rgba(232,98,42,0.15)' }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </a>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex shrink-0">
            <GradientButton href={`mailto:${CONTACT_EMAIL}`} height="40px">
              Написать нам
            </GradientButton>
          </div>
        </div>
      </header>

      {/* ── Mobile bottom pill ───────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-4">
        <div className="flex items-center gap-1 bg-black/80 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {NAV_LINKS.map((link) => {
            const Icon = NAV_ICON_MAP[link.href] ?? User
            const isActive = activeTab === link.href

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveTab(link.href)}
                className={cn(
                  'relative flex items-center justify-center w-10 h-10 rounded-full transition-colors',
                  isActive ? 'text-[#E8622A]' : 'text-white/60 hover:text-white'
                )}
              >
                <Icon size={18} strokeWidth={2} />
                {isActive && (
                  <motion.div
                    layoutId="lamp-mobile"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: 'rgba(232,98,42,0.12)' }}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <div
                      className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-t-full"
                      style={{ background: '#E8622A' }}
                    />
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
