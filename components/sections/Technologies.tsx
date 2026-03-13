'use client'

import { useState } from 'react'
import AnimatedBackground from '@/components/ui/animated-background'
import { useInView } from '@/hooks/useInView'
import { ML_COMPETENCIES, DEV_COMPETENCIES } from '@/constants/content'
import { cn } from '@/lib/utils'

const TABS = ['ML & AI', 'Dev & Infra']

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('ML & AI')
  const { ref, inView } = useInView()

  const items = activeTab === 'ML & AI' ? ML_COMPETENCIES : DEV_COMPETENCIES

  return (
    <section id="technologies" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <span className="font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-widest text-[#E8622A] block mb-3">
            Экспертиза
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl lg:text-5xl text-white mb-4">
            Технологии
          </h2>
          <p className="font-[family-name:var(--font-mono)] text-sm text-white/50 max-w-lg">
            Экспертиза, на которую можно опереться
          </p>
        </div>

        {/* Tabs with AnimatedBackground */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
            <AnimatedBackground
              defaultValue="ML & AI"
              onValueChange={(id) => { if (id) setActiveTab(id) }}
              className="rounded-full bg-[#E8622A]"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            >
              {TABS.map((tab) => (
                <div
                  key={tab}
                  data-id={tab}
                  className="cursor-pointer px-5 py-2"
                >
                  <span
                    className={cn(
                      'font-[family-name:var(--font-mono)] text-sm tracking-wide transition-colors duration-200',
                      activeTab === tab ? 'text-white' : 'text-white/50'
                    )}
                  >
                    {tab}
                  </span>
                </div>
              ))}
            </AnimatedBackground>
          </div>
        </div>

        {/* Competency cards with AnimatedBackground hover */}
        <div
          ref={ref}
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatedBackground
            enableHover
            className="rounded-xl bg-[rgba(232,98,42,0.08)]"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
          >
            {items.map((item, index) => (
              <div
                key={item.num}
                data-id={`card-${item.num}`}
                className={cn(
                  'w-full cursor-default',
                  'transition-[opacity,transform] duration-700',
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="relative p-5 rounded-xl border border-white/10 h-full">
                  {/* Number watermark */}
                  <span
                    className="absolute top-4 right-4 text-4xl font-extrabold font-[family-name:var(--font-display)] select-none"
                    style={{ color: 'rgba(232,98,42,0.15)' }}
                  >
                    {String(item.num).padStart(2, '0')}
                  </span>

                  <h3 className="font-bold font-[family-name:var(--font-display)] text-white mb-2 pr-10">
                    {item.title}
                  </h3>
                  <p className="text-xs font-[family-name:var(--font-mono)] text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </section>
  )
}
