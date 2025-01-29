'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import Image from 'next/image'

export default function Hero() {
  const t = useTranslations()

  return (
    <section className="w-full min-h-screen bg-white flex items-center relative">
      <div className="absolute inset-0 custom:hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/80 z-[1]" />
        <Image
          src="/images/hero.jpg"
          alt={t('sections.hero.backgroundAlt')}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container px-4 md:px-6 py-32 relative z-10 mx-auto">
        <div className="max-w-[620px] relative">
          <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-[#081F3E] mb-8">
            {t('sections.hero.title1')}
            <br />
            {t('sections.hero.title2')}
          </h1>
          <p className="text-lg md:text-xl text-[#2D4565] mb-8 max-w-[540px]">
            {t('sections.hero.description')}
          </p>
          <Button 
            asChild
            size="lg"
            className="px-0 text-lg md:text-xl text-[#2D4565] hover:text-[#081F3E] transition-colors"
            variant="link"
          >
            <Link href="#projects" className="flex items-center gap-1">
              {t('sections.hero.button')}
              <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 hidden custom:block">
        <Image
          src="/images/hero.jpg"
          alt={t('sections.hero.backgroundAlt')}
          fill
          className="object-cover object-[34%]"
          priority
        />
      </div>
    </section>
  )
}

