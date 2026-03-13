'use client'

import { useInView } from '@/hooks/useInView'
import { HOW_WE_WORK_STEPS } from '@/constants/content'
import { cn } from '@/lib/utils'

const SECTION_TITLE = 'Как мы работаем'
const SECTION_SUBTITLE = '9 шагов от первого разговора до масштабирования решения'

export default function HowWeWork() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="how-we-work" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-display)] text-foreground mb-4">
            {SECTION_TITLE}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{SECTION_SUBTITLE}</p>
        </div>

        {/* Mobile/Tablet: vertical timeline | Desktop: two-column grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-x-16"
        >
          {HOW_WE_WORK_STEPS.map((step, index) => (
            <div
              key={step.num}
              className={cn(
                'timeline-item relative flex gap-4 pb-8 lg:pb-10 transition-all duration-700',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Number circle */}
              <div className="relative z-10 shrink-0 flex items-start">
                <div className="w-10 h-10 rounded-full border-2 border-primary/40 bg-card flex items-center justify-center">
                  <span className="text-xs font-bold text-primary font-[family-name:var(--font-display)]">
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-1.5 pb-2">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (mobile/tablet) */}
              {index < HOW_WE_WORK_STEPS.length - 1 && (
                <div className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
