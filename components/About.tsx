"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/useTranslations"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function About() {
  const t = useTranslations()

  return (
    <section
      id="about"
      className={cn("w-full py-12 md:py-24 lg:py-32 bg-maincolor")}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-background mb-4">
            {t("sections.about.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <p className="max-w-[700px] text-[#E9E9E9] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6">
            {t("sections.about.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          <Button
            asChild
            variant="link"
            className="text-[#E9E9E9] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed px-0"
          >
            <Link href="/about" className="inline-flex items-center">
              {t("sections.about.button")}
              <ChevronRight />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}