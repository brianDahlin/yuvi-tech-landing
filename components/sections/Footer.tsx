import { AnimatedFooter } from '@/components/ui/animated-footer'
import { NAV_LINKS, CONTACT_EMAIL } from '@/constants/content'

const LEFT_LINKS = NAV_LINKS.map((link) => ({ href: link.href, label: link.label }))

const RIGHT_LINKS = [
  { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
]

function FooterBrand() {
  return (
    <div className="border-b border-white/10 pb-8">
      <div className="font-[family-name:var(--font-display)] text-2xl font-bold mb-2">
        <span className="text-white">Yu</span>
        <span className="text-[#E8622A]">Vi</span>
        <span className="text-white"> Technology</span>
      </div>
      <p className="font-[family-name:var(--font-mono)] text-xs text-white/40 max-w-xs leading-relaxed">
        Стратегический партнёр по AI: от идеи до внедрения и масштабирования.
      </p>
    </div>
  )
}

export default function Footer() {
  return (
    <AnimatedFooter
      topSlot={<FooterBrand />}
      leftLinks={LEFT_LINKS}
      rightLinks={RIGHT_LINKS}
      copyrightText="YuVi Technology 2026. Все права защищены."
      barCount={23}
    />
  )
}
