import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhyUs from '@/components/sections/WhyUs'
import Cases from '@/components/sections/Cases'
import Technologies from '@/components/sections/Technologies'
import Products from '@/components/sections/Products'
import HowWeWork from '@/components/sections/HowWeWork'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Cases />
        <Technologies />
        <Products />
        <HowWeWork />
      </main>
      <Footer />
    </>
  )
}
