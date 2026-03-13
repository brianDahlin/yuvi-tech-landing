import type { Metadata } from 'next'
import { Montserrat, Inter, Fragment_Mono } from 'next/font/google'
import './globals.css'

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

const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'YuVi Tech — AI & Web3 Development',
  description:
    'Стратегический партнёр по искусственному интеллекту: от идеи до внедрения. Помогаем корпорациям и растущим компаниям зарабатывать на данных.',
  openGraph: {
    title: 'YuVi Tech — AI & Web3 Development',
    description: 'Стратегический партнёр по AI: от идеи до внедрения',
    url: 'https://yuvi.technology',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`dark ${montserrat.variable} ${inter.variable} ${fragmentMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}
