'use client'

import { useInView } from '@/hooks/useInView'
import { STATS } from '@/constants/content'
import { cn } from '@/lib/utils'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-20 md:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12"
        >
          {STATS.map((stat, index) => (
            <div
              key={stat.value}
              className={cn(
                'text-center transition-all duration-700',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-display)] text-primary mb-3">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
