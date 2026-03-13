"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-5 rounded-xl overflow-hidden transition-all duration-300",
            "border border-white/10 bg-card",
            "hover:shadow-[0_2px_20px_rgba(232,98,42,0.08)]",
            "hover:-translate-y-0.5 will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && "-translate-y-0.5 shadow-[0_2px_20px_rgba(232,98,42,0.08)]"
          )}
        >
          {/* Dot grid pattern on hover */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,98,42,0.04)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            {/* Header: icon + status */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-[rgba(232,98,42,0.12)] transition-all duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span className="text-xs font-[family-name:var(--font-mono)] px-2 py-1 rounded-lg bg-white/5 text-white/50 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white/70">
                  {item.status}
                </span>
              )}
            </div>

            {/* Title + meta + description */}
            <div className="space-y-2">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[15px] text-white tracking-tight">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs text-white/40 font-normal font-[family-name:var(--font-mono)]">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm font-[family-name:var(--font-mono)] text-white/50 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Tags + CTA */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-white/40 font-[family-name:var(--font-mono)]">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-[family-name:var(--font-mono)] text-white/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ml-2" style={{ color: '#E8622A' }}>
                {item.cta ?? "Подробнее →"}
              </span>
            </div>
          </div>

          {/* Gradient border on hover */}
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-[rgba(232,98,42,0.15)] to-transparent transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };
