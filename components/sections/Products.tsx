import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid'
import { PRODUCTS, CONTACT_EMAIL } from '@/constants/content'
import { Sparkles, Eye, Bot, Database } from 'lucide-react'
import { GradientButton } from '@/components/ui/gradient-button'

const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  'GenAI API':    <Sparkles className="w-4 h-4 text-[#E8622A]" />,
  'CV Box':       <Eye      className="w-4 h-4 text-[#E8622A]" />,
  'AI‑Агенты':    <Bot      className="w-4 h-4 text-[#E8622A]" />,
  'DataMall':     <Database className="w-4 h-4 text-[#E8622A]" />,
}

const PRODUCT_STATUS: Record<string, string> = {
  'GenAI API':  'API Ready',
  'CV Box':     'Production',
  'AI‑Агенты':  'Live',
  'DataMall':   'Beta',
}

const bentoItems: BentoItem[] = PRODUCTS.map((product, i) => ({
  title:       product.title,
  description: product.description,
  icon:        PRODUCT_ICONS[product.title] ?? <Sparkles className="w-4 h-4 text-[#E8622A]" />,
  status:      PRODUCT_STATUS[product.title],
  tags:        [...product.industries],
  cta:         'Узнать больше →',
  // GenAI API и AI-Агенты занимают 2 колонки
  colSpan:          i === 0 || i === 2 ? 2 : 1,
  hasPersistentHover: i === 0,
}))

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <span className="font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-widest text-[#E8622A] block mb-3">
            Готовые решения
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl lg:text-5xl text-white mb-4">
            Продукты
          </h2>
          <p className="font-[family-name:var(--font-mono)] text-sm text-white/50 max-w-lg">
            Внедряются за недели, а не месяцы — готовые модули на базе наших технологий
          </p>
        </div>

        <BentoGrid items={bentoItems} />

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="font-[family-name:var(--font-mono)] text-sm text-white/40">
            Нужно кастомное решение?
          </p>
          <GradientButton href={`mailto:${CONTACT_EMAIL}`} height="52px">
            Обсудить индивидуальный проект
          </GradientButton>
        </div>
      </div>
    </section>
  )
}
