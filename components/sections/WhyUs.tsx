'use client'

import { type ReactNode } from 'react'
import {
  TrendingUp,
  Users,
  Layers,
  Server,
  BarChart3,
  Headphones,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { useInView } from '@/hooks/useInView'
import { WHY_US_ITEMS } from '@/constants/content'
import { cn } from '@/lib/utils'

const SECTION_TITLE = 'Почему выбирают нас'
const SECTION_SUBTITLE = 'Шесть причин, по которым ведущие компании доверяют нам свои AI-проекты'

const ITEM_ICONS: LucideIcon[] = [
  TrendingUp,
  Users,
  Layers,
  Server,
  BarChart3,
  Headphones,
]

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-28 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-white/20 bg-card">
      {children}
    </div>
  </div>
)

export default function WhyUs() {
  const { ref, inView } = useInView()

  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <span className="font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-widest text-[#E8622A] block mb-3">
            Преимущества
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl lg:text-5xl text-white mb-4">
            {SECTION_TITLE}
          </h2>
          <p className="font-[family-name:var(--font-mono)] text-sm text-white/50 max-w-lg">
            {SECTION_SUBTITLE}
          </p>
        </div>

        {/* Grid */}
        <ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {WHY_US_ITEMS.map((item, index) => {
            const Icon = ITEM_ICONS[index] ?? TrendingUp
            return (
              <li
                key={item.title}
                className={cn(
                  'list-none min-h-[16rem]',
                  'transition-[opacity,transform] duration-700',
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative h-full rounded-[1.25rem] border border-white/10 p-2">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-white/8 bg-card p-6">

                    <CardDecorator>
                      <Icon className="size-5 text-[#E8622A]" />
                    </CardDecorator>

                    <div className="space-y-2">
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-white">
                        {item.title}
                      </h3>
                      <p className="font-[family-name:var(--font-mono)] text-xs text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-start gap-2 mt-auto pt-2 border-t border-white/8">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#E8622A] mt-0.5 shrink-0" />
                      <p className="font-[family-name:var(--font-mono)] text-xs text-white/60 leading-relaxed">
                        {item.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
