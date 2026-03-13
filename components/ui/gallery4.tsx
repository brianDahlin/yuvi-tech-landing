"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export interface Gallery4Item {
  id: string
  title: string
  description: string
  href: string
  image: string
  industry?: string
  result?: string
}

export interface Gallery4Props {
  title?: string
  description?: string
  items: Gallery4Item[]
}

const Gallery4 = ({
  title = "Кейсы",
  description = "Реальные результаты для реального бизнеса",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) return
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }
    updateSelection()
    carouselApi.on("select", updateSelection)
    return () => { carouselApi.off("select", updateSelection) }
  }, [carouselApi])

  return (
    <section id="cases" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            {/* Section label */}
            <span className="font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-widest text-[#E8622A]">
              Наши результаты
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl lg:text-5xl text-white">
              {title}
            </h2>
            <p className="max-w-lg font-[family-name:var(--font-mono)] text-sm text-white/50">
              {description}
            </p>
          </div>
          {/* Arrow buttons — desktop */}
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border border-white/10 text-white/60 hover:text-white hover:bg-white/5 disabled:opacity-30 rounded-full"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border border-white/10 text-white/60 hover:text-white hover:bg-white/5 disabled:opacity-30 rounded-full"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Full-width carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-[max(1rem,calc(50vw-600px))] 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[400px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Orange gradient overlay — uses project primary */}
                    <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-black/40 to-black/90" />

                    {/* Card content */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">
                      {/* Industry badge */}
                      {item.industry && (
                        <span className="mb-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest text-[#E8622A]">
                          {item.industry}
                        </span>
                      )}

                      <div className="mb-2 text-xl font-bold font-[family-name:var(--font-display)] text-white">
                        {item.title}
                      </div>

                      <div className="mb-4 line-clamp-2 font-[family-name:var(--font-mono)] text-sm text-white/60">
                        {item.description}
                      </div>

                      {/* Result metric */}
                      {item.result && (
                        <div className="mb-4 text-2xl font-bold font-[family-name:var(--font-display)] text-[#E8622A]">
                          {item.result}
                        </div>
                      )}

                      <div className="flex items-center font-[family-name:var(--font-mono)] text-sm text-white/40 group-hover:text-white/80 transition-colors">
                        Подробнее
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#E8622A] w-6"
                  : "bg-white/20 w-1.5 hover:bg-white/40"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Gallery4 }
