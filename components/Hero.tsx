"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const t = useTranslations()

  return (
    <section className="w-full h-screen bg-white flex items-center relative">
      <div className="absolute inset-0 w-full h-screen custom:hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/80 z-[1]" />
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.jpg"
            alt={t("sections.hero.backgroundAlt")}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 size-full">
        <div className="flex container mx-auto items-center h-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 px-4 md:px-6 relative z-10 mx-auto flex-1"
          >
            <div className="max-w-[620px] relative">
              <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-[#081F3E] mb-8">
                {t("sections.hero.title1")}
                <br />
                {t("sections.hero.title2")}
              </h1>
              <p className="text-lg md:text-xl text-[#2D4565] mb-8 max-w-[540px]">{t("sections.hero.description")}</p>
              <Button
                asChild
                size="lg"
                className="px-0 text-lg md:text-xl text-[#2D4565] hover:text-[#081F3E] transition-colors"
                variant="link"
              >
                <Link href="#projects" className="flex items-center gap-1">
                  {t("sections.hero.button")}
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <div className="flex-1 custom:block hidden"></div>
        </div>
      </div>

      <div className="absolute top-0 left-0 size-full">
        <div className="flex">
          <div className="w-1/2"></div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden custom:block h-screen w-1/2 relative"
          >
            <Image
              src="/images/hero.jpg"
              alt={t("sections.hero.backgroundAlt")}
              fill
              sizes="50vw"
              className="object-cover object-[34%]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

