'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const projects = [
  {
    id: "quantum",
    image: "/placeholder.svg?height=600&width=600",
    learnMoreLink: "/projects/1"
  },
  {
    id: "energy",
    image: "/images/SPomiarowe.jpg",
    learnMoreLink: "/projects/2"
  },
  {
    id: "ai",
    image: "/placeholder.svg?height=600&width=600",
    learnMoreLink: "/projects/3"
  },
  {
    id: "nano",
    image: "/placeholder.svg?height=600&width=600",
    learnMoreLink: "/projects/4"
  },
  {
    id: "space",
    image: "/placeholder.svg?height=600&width=600",
    learnMoreLink: "/projects/5"
  },
  {
    id: "biotech",
    image: "/placeholder.svg?height=600&width=600",
    learnMoreLink: "/projects/6"
  },
  {
    id: "robotics",
    image: "/placeholder.svg?height=600&width=600",
    learnMoreLink: "/projects/7"
  }
]

export default function ProjectsAccordion() {
  const t = useTranslations()

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[600px]">
              <div className="absolute inset-0 bg-gray-50 rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Scientific research illustration"
                  width={600}
                  height={600}
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#081F3E]">
                {t('sections.projects.title')}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('sections.projects.subtitle')}
              </p>
            </div>
            <div className="max-h-[600px] overflow-y-auto pr-4">
              <Accordion type="single" collapsible className="w-full">
                {projects.map((project) => (
                  <AccordionItem key={project.id} value={project.id}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {t(`sections.projects.projects.${project.id}.title`)}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-gray-500">
                          {t(`sections.projects.projects.${project.id}.description`)}
                        </p>
                        <Link 
                          href={project.learnMoreLink}
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          {t('sections.projects.viewProject')}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

