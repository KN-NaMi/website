'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { useTranslations } from '@/hooks/useTranslations'
import { motion } from 'framer-motion' // Import motion z framer-motion

const partners = [
  { 
    id: 1, 
    name: "Politechnika Wrocławska", 
    logo: "/sponsors/pwr.png", 
    url: "https://pwr.edu.pl/",
    maxHeight: "6rem"
  },
  { 
    id: 2, 
    name: "Wydział Elektroniki, Fotoniki i Mikrosystemów", 
    logo: "/sponsors/wefim.png", 
    url: "https://wefim.pwr.edu.pl/",
    maxHeight: "6rem"
  },
  { 
    id: 3, 
    name: "STMicroelectronics", 
    logo: "/sponsors/st.svg", 
    url: "https://www.st.com",
    maxHeight: "5rem"
  },
  { 
    id: 4, 
    name: "Symkom", 
    logo: "/sponsors/symkom.svg", 
    url: "https://symkom.pl",
    maxHeight: "5rem"
  },
  { 
    id: 5, 
    name: "Ansys", 
    logo: "/sponsors/ansys.svg", 
    url: "https://www.ansys.com",
    maxHeight: "5rem"
  },
  { 
    id: 6, 
    name: "HackerFab", 
    logo: "/partners/hackerfab.avif", 
    url: "https://hackerfab.ece.cmu.edu/#next",
    maxHeight: "5rem"
  }
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
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#081F3E]">
              {t('sections.partners.title')}
            </h2>
            <p className="max-w-[900px] text-[#2D4565] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('sections.partners.subtitle')}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 transition-colors h-24"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={200}
                      className="w-auto object-contain" 
                      style={{ maxHeight: partner.maxHeight }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}