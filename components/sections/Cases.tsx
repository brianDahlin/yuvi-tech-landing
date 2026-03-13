import { Gallery4, type Gallery4Item } from '@/components/ui/gallery4'
import { CASES, CONTACT_EMAIL } from '@/constants/content'

const CASE_IMAGES: Record<string, string> = {
  'ИИ‑менеджер по продажам':
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&q=80',
  'CV-контроль качества':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1080&q=80',
  'Персональные рекомендации':
    'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1080&q=80',
}

const caseItems: Gallery4Item[] = CASES.map((item, i) => ({
  id: String(i),
  title: item.title,
  description: item.description,
  href: `mailto:${CONTACT_EMAIL}`,
  image: CASE_IMAGES[item.title] ?? `https://images.unsplash.com/photo-1551434678-e076c223a692?w=1080&q=80`,
  industry: item.industry,
  result: item.result,
}))

export default function Cases() {
  return (
    <Gallery4
      title="Кейсы"
      description="Реальные результаты для реального бизнеса — от автоматизации продаж до компьютерного зрения на производстве."
      items={caseItems}
    />
  )
}
