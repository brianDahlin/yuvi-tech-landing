# CLAUDE.md — YuVi Tech Landing

## Контекст проекта

Одностраничный маркетинговый лендинг для **YuVi Tech** — AI & Web3 Development.
- Сайт: `yuvi.technology`
- Email: `info@yuvi.technology`
- Тип: статический лендинг на Next.js (App Router), без бэкенда

---

## Стек

- **Framework:** Next.js App Router (последняя стабильная — уточни через context7)
- **Package manager:** pnpm
- **Language:** TypeScript, strict mode, без `any`
- **UI:** shadcn/ui — все компоненты из `@/components/ui/`
- **Styling:** Tailwind CSS (mobile-first) + CSS-переменные в `globals.css`
- **Шрифты:** Google Fonts через `next/font/google` — `Montserrat` (заголовки) + `Inter` (тело)
- **Анимации:** CSS transitions + `IntersectionObserver` через кастомный хук `useInView`
- **Деплой:** Cloudflare Pages (статический экспорт)

---

## Структура проекта

```
/
├── app/
│   ├── layout.tsx          # Root layout, шрифты, metadata
│   ├── page.tsx            # Главная — компонует все секции
│   └── globals.css         # CSS-переменные, базовые стили
├── components/
│   ├── ui/                 # shadcn/ui компоненты (не трогать руками)
│   ├── sections/           # Секции лендинга
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Cases.tsx
│   │   ├── Technologies.tsx
│   │   ├── Products.tsx
│   │   ├── HowWeWork.tsx
│   │   └── Footer.tsx
│   └── layout/
│       └── Header.tsx      # Sticky навигация + mobile burger
├── hooks/
│   └── useInView.ts        # IntersectionObserver для scroll-анимаций
├── lib/
│   └── utils.ts            # cn() и утилиты
├── constants/
│   └── content.ts          # Весь текстовый контент лендинга
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .npmrc
└── CLAUDE.md
```

---

## Дизайн-система

### Айдентика бренда

- **Название:** YuVi Tech
- **Слоган:** AI & Web3 Development
- **Акцентный цвет:** `#E8622A` — фирменный оранжевый (из логотипа)
- **Логотип:** геометрический символ из 5 оранжевых прямоугольников со ступенчатым сдвигом
- **Тема по умолчанию:** тёмная (`class="dark"` на `<html>`)

### CSS-переменные (`globals.css`)

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 7%;
    --card: 0 0% 97%;
    --card-foreground: 0 0% 7%;
    --primary: 21 79% 54%;           /* #E8622A — фирменный оранжевый */
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 94%;
    --secondary-foreground: 0 0% 20%;
    --muted: 0 0% 94%;
    --muted-foreground: 0 0% 45%;
    --accent: 21 79% 54%;
    --accent-foreground: 0 0% 100%;
    --border: 0 0% 88%;
    --input: 0 0% 88%;
    --ring: 21 79% 54%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 0%;           /* чистый чёрный — как в логотипе */
    --foreground: 0 0% 100%;
    --card: 0 0% 7%;
    --card-foreground: 0 0% 100%;
    --primary: 21 79% 54%;           /* оранжевый одинаковый в обеих темах */
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 12%;
    --secondary-foreground: 0 0% 80%;
    --muted: 0 0% 12%;
    --muted-foreground: 0 0% 60%;
    --accent: 21 79% 54%;
    --accent-foreground: 0 0% 100%;
    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 21 79% 54%;
  }
}
```

### Шрифты (`app/layout.tsx`)

```tsx
import { Montserrat, Inter } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})
```

Применение:
- Заголовки: `font-[family-name:var(--font-display)] font-bold`
- Тело: `font-[family-name:var(--font-body)]`

### Логотип SVG (inline компонент)

Геометрический символ из логотипа — 5 прямоугольников со ступенчатым сдвигом:

```tsx
// components/layout/Logo.tsx
export const YuViLogo = ({ size = 36 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="YuVi Tech логотип"
  >
    <rect x="2"  y="2"  width="12" height="7" rx="1" fill="#E8622A" />
    <rect x="10" y="2"  width="20" height="7" rx="1" fill="#E8622A" />
    <rect x="2"  y="14" width="26" height="7" rx="1" fill="#E8622A" />
    <rect x="10" y="26" width="12" height="7" rx="1" fill="#E8622A" />
    <rect x="18" y="26" width="16" height="7" rx="1" fill="#E8622A" />
  </svg>
)
```

Использование в Header:
```tsx
<Link href="/" className="flex items-center gap-3">
  <YuViLogo />
  <div className="flex flex-col leading-tight">
    <span className="font-[family-name:var(--font-display)] font-bold text-lg leading-none">
      YuVi Tech
    </span>
    <span className="text-xs text-muted-foreground">AI & Web3 Development</span>
  </div>
</Link>
```

### Mobile-first breakpoints (Tailwind)

```
base (320px+) → sm:(640px+) → md:(768px+) → lg:(1024px+) → xl:(1280px+)
```

Минимальный поддерживаемый размер — **375px** (iPhone SE).

---

## Секции — поведение

| Секция | Mobile | Tablet | Desktop |
|---|---|---|---|
| Header | бургер + drawer | бургер + drawer | горизонтальный nav |
| About stats | 1 колонка | 3 колонки | 3 колонки |
| WhyUs cards | 1 колонка | 2 колонки | 3 колонки |
| Cases | horizontal scroll + snap | grid 2 col | grid 2-3 col |
| Products | 1 колонка | 2 колонки | 4 колонки |
| HowWeWork | вертикальный timeline | вертикальный timeline | зигзаг / горизонт |

### Header
- Sticky + `backdrop-blur` + `bg-background/80` при скролле
- Логотип: `<YuViLogo />` + «YuVi Tech» + подпись «AI & Web3 Development»
- Nav-ссылки с плавным скроллом к секциям через `id`
- CTA: `<Button asChild><a href="mailto:info@yuvi.technology">Написать нам</a></Button>`
- Mobile: бургер → shadcn `<Sheet>`

### Hero
- Fluid заголовок: `text-4xl md:text-6xl xl:text-7xl`
- Фон: CSS `radial-gradient` с оранжевым свечением (`rgba(232,98,42,0.12)`) — никаких изображений
- CTA → `href="mailto:info@yuvi.technology"`
- Анимация появления при загрузке (opacity + translateY, CSS only)

### WhyUs (6 карточек)
- shadcn `<Card>` + hover: `hover:border-primary/50 transition-all`
- Glow: `hover:shadow-[0_0_24px_rgba(232,98,42,0.15)]`
- Stagger через `useInView` + `animationDelay`

### Cases
- Mobile: `overflow-x-auto snap-x snap-mandatory`
- Тег индустрии — shadcn `<Badge variant="outline">`
- Метрика результата крупно в `text-primary`

### Technologies
- shadcn `<Tabs defaultValue="ml">`
- ML: 8 компетенций с номерами из `ML_COMPETENCIES`
- DEV: заглушка на будущее

### Products
- shadcn `<Badge variant="secondary">` для тегов индустрий

### HowWeWork
- Mobile: вертикальный timeline через `border-l border-primary/30`
- Номер шага: `text-primary/40 font-bold text-5xl`

---

## Контент (`constants/content.ts`)

```typescript
export const STATS = [
  { value: '3 года', label: 'Помогаем бизнесу зарабатывать на данных' },
  { value: '30', label: 'Экспертов с опытом Yandex, Sber, Avito, МТС AI' },
  { value: '60+', label: 'Завершённых AI‑проектов' },
] as const

export const WHY_US_ITEMS = [
  {
    title: 'Бизнес‑фокус',
    description: 'Считаем ROI до старта и говорим языком метрик',
    benefit: 'Экономите бюджет и получаете прогнозируемый результат',
  },
  {
    title: 'Senior‑команда',
    description: 'Все инженеры 5+ лет в ML',
    benefit: 'Минимум рисков «учёбы на ваших данных»',
  },
  {
    title: 'Библиотека демо',
    description: '>10 готовых модулей',
    benefit: 'MVP за дни вместо месяцев, быстрая проверка гипотез',
  },
  {
    title: 'On‑prem & Cloud',
    description: 'С учётом GDPR',
    benefit: 'Безопасность данных и легальная чистота',
  },
  {
    title: 'Прозрачность',
    description: 'Weekly‑репорты по результатам работы',
    benefit: 'Всегда понимаете статус проекта и следующий шаг',
  },
  {
    title: 'Поддержка 24/7',
    description: 'И обучение команды',
    benefit: 'Ваша внутренняя экспертиза растёт вместе с продуктом',
  },
] as const

export const CASES = [
  {
    title: 'ИИ‑менеджер по продажам',
    industry: 'Real Estate & Sales',
    description: 'Преквалифицирует лиды 24/7. ИИ‑агент логирует действия в AmoCRM.',
    result: '3x рост конверсии',
  },
] as const

export const ML_COMPETENCIES = [
  { num: 1, title: 'Classic ML', description: 'Построение моделей для работы с табличными данными' },
  { num: 2, title: 'MLOps', description: 'Развертывание и поддержание ML моделей на производстве' },
  { num: 3, title: 'RecSys', description: 'Рекомендательные системы' },
  { num: 4, title: 'Предиктивная аналитика', description: 'Построение моделей для анализа временных рядов' },
  { num: 5, title: 'Computer Vision', description: 'Построение моделей компьютерного зрения' },
  { num: 6, title: 'NLP', description: 'Построение моделей для анализа текстовых данных' },
  { num: 7, title: 'Audio', description: 'Модели для работы с аудио. Распознавание и синтез голоса' },
  { num: 8, title: 'Генеративные модели', description: 'Генерация текста, изображений, видео и аудио' },
] as const

export const PRODUCTS = [
  {
    title: 'GenAI API',
    description: 'Платформа для доступа к моделям генерации изображений и видео через API.',
    industries: ['Контент', 'Маркетинг', 'Агентства', 'Медиа', 'E-commerce'],
  },
  {
    title: 'CV Box',
    description: 'Платформа для детекции объектов, контроля брака и работы сотрудников.',
    industries: ['Ритейл', 'FMCG', 'Склады', 'Производство'],
  },
  {
    title: 'AI‑Агенты',
    description: 'Чат-боты для оптимизации бизнес-процессов и автоматизации клиентского сервиса.',
    industries: ['Клиентский сервис', 'Продажи', 'HR‑онбординг', 'IT‑helpdesk'],
  },
  {
    title: 'DataMall',
    description: 'Платформа для парсинга данных из соцсетей и веб-сайтов.',
    industries: ['BI‑команды', 'Ценообразование', 'Маркетинг'],
  },
] as const

export const HOW_WE_WORK_STEPS = [
  { num: 1, title: 'Консультация', description: 'Понимаем задачу, считаем потенциальную выгоду' },
  { num: 2, title: 'Диагностика процессов', description: 'Изучаем бизнес и данные, выявляем точки роста' },
  { num: 3, title: 'R&D', description: 'При необходимости — исследование и прототипирование' },
  { num: 4, title: 'Архитектура и план работ', description: 'Согласовываем MVP, сроки, бюджеты' },
  { num: 5, title: 'Коммерческое предложение', description: 'Утверждаем детали, подписываем договор и NDA' },
  { num: 6, title: 'Запуск проекта', description: 'Настраиваем команды, каналы связи, контроль' },
  { num: 7, title: 'Разработка и релизы', description: 'Работаем спринтами, каждые 2 недели — демо' },
  { num: 8, title: 'Запуск решения и метрики', description: 'Тестируем, сравниваем с KPI, внедряем' },
  { num: 9, title: 'Поддержка и масштабирование', description: 'Обновления, расширение, SLA, ретроспективы' },
] as const
```

---

## Анимации

```typescript
// hooks/useInView.ts
import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
```

Tailwind-паттерн:
```tsx
className={cn(
  'transition-all duration-700',
  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
)}
```

Stagger: `style={{ animationDelay: \`${index * 100}ms\` }}`

---

## SEO / Metadata

```typescript
export const metadata: Metadata = {
  title: 'YuVi Tech — AI & Web3 Development',
  description: 'Стратегический партнёр по искусственному интеллекту: от идеи до внедрения. Помогаем корпорациям и растущим компаниям зарабатывать на данных.',
  openGraph: {
    title: 'YuVi Tech — AI & Web3 Development',
    description: 'Стратегический партнёр по AI: от идеи до внедрения',
    url: 'https://yuvi.technology',
  },
}
```

---

## Docker

```dockerfile
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
```

```yaml
# docker-compose.yml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    restart: unless-stopped
```

```
# .dockerignore
node_modules
.next
.env
.env.local
.git
*.md
Dockerfile
docker-compose.yml
```

```
# .npmrc
shamefully-hoist=true
```

`next.config.ts` обязательно:
```typescript
const nextConfig = { output: 'standalone' }
export default nextConfig
```

---

## Запреты

- ❌ Не использовать стоковые изображения — только CSS/SVG
- ❌ Не хардкодить тексты в JSX — всё через `constants/content.ts`
- ❌ Не хардкодить цвета напрямую — только CSS-переменные и Tailwind-токены
- ❌ Не добавлять Framer Motion, GSAP и другие анимационные либы
- ❌ Не верстать desktop-first — только mobile-first
- ❌ Не создавать отдельные страницы — только `app/page.tsx`
- ❌ Не использовать `npm` или `yarn` — только `pnpm`

---

## Чеклист перед финалом

- [ ] Верстка не ломается на 375px без горизонтального скролла
- [ ] Touch-таргеты кнопок и ссылок ≥ 44×44px
- [ ] Sticky header работает корректно
- [ ] Burger-меню открывается и закрывается
- [ ] Логотип SVG отображается корректно в тёмной теме
- [ ] Все CTA ведут на `mailto:info@yuvi.technology`
- [ ] Оранжевый `#E8622A` везде через `--primary`, не хардкодом
- [ ] Нет `console.log` в коде
- [ ] Нет `any` в TypeScript
- [ ] `pnpm run build` проходит без ошибок
- [ ] `docker compose build && docker compose up -d` — контейнер поднимается
