"use client"

import { useEffect, useRef, useState } from "react"

export interface AnimatedTabsProps {
  tabs: { label: string }[]
  defaultTab?: string
  onChange?: (label: string) => void
}

export function AnimatedTabs({ tabs, defaultTab, onChange }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0].label)
  const containerRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (container && activeTab) {
      const activeTabElement = activeTabRef.current
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement
        const clipLeft  = offsetLeft + 16
        const clipRight = offsetLeft + offsetWidth + 16
        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100
        ).toFixed()}% round 17px)`
      }
    }
  }, [activeTab])

  function handleSelect(label: string) {
    setActiveTab(label)
    onChange?.(label)
  }

  return (
    <div className="relative bg-white/5 border border-white/10 mx-auto flex w-fit flex-col items-center rounded-full py-2 px-4">
      {/* Sliding orange highlight */}
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative flex w-full justify-center bg-[#E8622A]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleSelect(tab.label)}
              className="flex h-8 items-center rounded-full p-3 font-[family-name:var(--font-mono)] text-sm font-medium text-white"
              tabIndex={-1}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Base tab row */}
      <div className="relative flex w-full justify-center">
        {tabs.map(({ label }, index) => {
          const isActive = activeTab === label
          return (
            <button
              key={index}
              ref={isActive ? activeTabRef : null}
              onClick={() => handleSelect(label)}
              className="flex h-8 items-center cursor-pointer rounded-full p-3 font-[family-name:var(--font-mono)] text-sm font-medium text-white/50 hover:text-white/80 transition-colors"
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
