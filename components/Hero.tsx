'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

export default function Hero() {
    const t = useTranslations()

  return (
    <section className="w-full min-h-screen bg-white flex items-center relative">
      <div className="container px-4 md:px-6 py-32 relative z-10 mx-auto container">
        <div className="max-w-[640px]">
          <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-[#081F3E] mb-8">
            Exploring Micro and Nano Worlds with NaMi
          </h1>
          <p className="text-lg md:text-xl text-[#2D4565] mb-8 max-w-[540px]">
            Discover the fascinating world of microscopic and nanoscale phenomena through cutting-edge research and innovation.
          </p>
          <Button 
            asChild
            size="lg"
            className='px-0 text-lg md:text-x text-[#2D4565]'
            variant='link'
          >
            <Link href="#projects">
              Our Projects
              <ChevronRight/>
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 hidden custom:block">
        <img
            src="/images/hero.png"
            alt="Hero Logo"
            className="w-full h-full object-cover object-[40%] max-w-none"
        />
        </div>
  
    </section>
  )
}

