'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { useTranslations } from '@/hooks/useTranslations'

const partners = [
  { id: 1, name: "STMicroelectronics", logo: "/sponsors/st.svg", url: "https://www.st.com"},
  { id: 2, name: "Symkom", logo: "/sponsors/symkom.svg", url: "https://symkom.pl"},
  { id: 3, name: "Ansys", logo: "/sponsors/ansys.svg", url: "https://www.ansys.com"}
]

export default function Partners() {
  const t = useTranslations()
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    slidesToScroll: 'auto',
    startIndex: 0,
  })

  useEffect(() => {
    if (!emblaApi) return

    const intervalId = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)

    return () => clearInterval(intervalId)
  }, [emblaApi])

  return (
    <section 
      id="partners" 
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6 mx-auto container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#081F3E]">
              {t('sections.partners.title')}
            </h2>
            <p className="max-w-[900px] text-[#2D4565] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('sections.partners.subtitle')}
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] px-4" 
                >
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 transition-colors"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200
                      }
                      height={100}
                      className="max-h-[80px] w-auto"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
