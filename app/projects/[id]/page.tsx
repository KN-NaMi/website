'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Globe, ArrowRight } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { useLanguageStore } from '@/lib/language'


const projects = [
  { 
    id: 1, 
    translationKey: 'quantum',
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    collaborators: [
      { name: "University Research Lab", logo: "/placeholder.svg?height=80&width=180", url: "https://universityresearchlab.edu" },
      { name: "Scientific Innovation Center", logo: "/placeholder.svg?height=80&width=180", url: "https://scienceinnovation.org" }
    ],
    sponsors: [
      { name: "TechCorp", logo: "/placeholder.svg?height=80&width=180", url: "https://techcorp.com" },
      { name: "QuantumSys", logo: "/placeholder.svg?height=80&width=180", url: "https://quantumsys.com" }
    ],
    learnMoreUrl: "https://example.com/quantum-research"
  },
  { 
    id: 2, 
    translationKey: 'energy',
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    collaborators: [
      { name: "Global Science Institute", logo: "/placeholder.svg?height=80&width=180", url: "https://globalsci.org" }
    ],
    sponsors: [
      { name: "EcoSolutions", logo: "/placeholder.svg?height=80&width=180", url: "https://ecosolutions.com" }
    ],
    learnMoreUrl: "https://example.com/quantum-research"
  },
  { 
    id: 3, 
    translationKey: 'ai',
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    collaborators: [
      { name: "Advanced Research Consortium", logo: "/placeholder.svg?height=80&width=180", url: "https://advancedresearch.edu" },
      { name: "International Science Alliance", logo: "/placeholder.svg?height=80&width=180", url: "https://intlscience.org" }
    ],
    sponsors: [
      { name: "BioInnovate", logo: "/placeholder.svg?height=80&width=180", url: "https://bioinnovate.com" },
      { name: "InnovateCo", logo: "/placeholder.svg?height=80&width=180", url: "https://innovateco.com" }
    ],
    learnMoreUrl: "https://example.com/quantum-research"
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center"
  })
  const t = useTranslations()
  const { language, setLanguage } = useLanguageStore()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white ">
      <main>
        <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mx-auto container">
          <div className="container px-4 md:px-6 pt-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#081F3E]">
                  {t(`sections.projects.projects.${project.translationKey}.title`)}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  {t(`sections.projects.projects.${project.translationKey}.description`)}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* <Button asChild className="bg-black text-white hover:bg-black/90">
                  <Link href="/#projects">{t('sections.projects.backToProjects')}</Link>
                </Button>
                <Button asChild variant="outline" className="text-black hover:text-black/90">
                  <a href="mailto:contact@studentscience.org">{t('nav.contact')}</a>
                </Button>
                {project.learnMoreUrl && (
                  <Button 
                    asChild 
                    variant="outline"
                    className="text-black hover:text-black/90 group"
                  >
                    <a 
                      href={project.learnMoreUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      {t('sections.projects.learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                )} */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-20 bg-gray-50 ">
          <div className="container px-4 md:px-6 mx-auto container">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#081F3E] mb-4">
              {t('sections.projects.projectDetails')}
            </h2>
            <p className="text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mb-12">
              {t(`sections.projects.projects.${project.translationKey}.fullDescription`)}
            </p>

            {project.images && project.images.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-[#081F3E] mb-6">
                  {t('sections.projects.projectGallery')}
                </h3>
                <div className="relative">
                  <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex">
                      {project.images.map((image, index) => (
                        <div key={index} className="relative flex-[0_0_100%] min-w-0">
                          <div className="relative pt-[56.25%]">
                            <Image
                              src={image}
                              alt={`${t(`sections.projects.projects.${project.translationKey}.title`)} - Image ${index + 1}`}
                              fill
                              className="absolute inset-0 object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
                          onClick={() => emblaApi?.scrollTo(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {project.collaborators && project.collaborators.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-[#081F3E] mb-6">
                  {t('sections.projects.projectCollaborators')}
                </h3>
                <div className="flex flex-wrap gap-8">
                  {project.collaborators.map((collaborator, index) => (
                    <a
                      key={index}
                      href={collaborator.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 transition-colors"
                    >
                      <Image
                        src={collaborator.logo}
                        alt={collaborator.name}
                        width={180}
                        height={80}
                        className="max-h-12 w-auto"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.sponsors && project.sponsors.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-[#081F3E] mb-6">
                  {t('sections.projects.projectSponsors')}
                </h3>
                <div className="flex flex-wrap gap-8">
                  {project.sponsors.map((sponsor, index) => (
                    <a
                      key={index}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 transition-colors"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={180}
                        height={80}
                        className="max-h-12 w-auto"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

