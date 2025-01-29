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
import { useState } from 'react'

const projects = [
  {
    id: "photolithography",
    image: "",
    learnMoreLink: "/projects/photolithography"
  },
  {
    id: "measurement",
    image: "/images/SPomiarowe.jpg",
    learnMoreLink: "/projects/measurement"
  },
  {
    id: "smartcane",
    image: "/projects/cane1.jpg",
    learnMoreLink: "/projects/smartcane"
  },
]

export default function ProjectsAccordion() {
  const t = useTranslations()
  const [activeProject, setActiveProject] = useState(projects[0].id)

  const currentImage = projects.find(p => p.id === activeProject)?.image || projects[0].image

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
        <div className="flex items-center justify-center">
            <div
              className="relative bg-gray-50 rounded-lg flex items-center justify-center"
              style={{
                padding: 20,
                maxWidth: "660px", 
              }}
            >
              <Image
                src={currentImage}
                alt={t(`sections.projects.projects.${activeProject}.title`)}
                width={600}
                height={0}
                className="object-contain max-w-[600px] w-full h-auto"
                priority
              />
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
              <Accordion 
                type="single" 
                collapsible 
                className="w-full"
                defaultValue={projects[0].id}
                onValueChange={(value) => {
                  if (value) {
                    setActiveProject(value)
                  }
                }}
              >
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
