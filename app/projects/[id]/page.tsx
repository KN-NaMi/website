"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Globe, ArrowRight, UserCircle2 } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"
import { useLanguageStore } from "@/lib/language"

const projects = [
  {
    id: "photolithography",
    translationKey: "photolithography",
    authors: [
      { name: "John Doe", roleKey: "projectLead", image: ""},
      { name: "Jane Smith", roleKey: "softwareEngineer", image: "" },
      { name: "Bob Wilson", roleKey: "hardwareEngineer", image: ""},
    ],
    images: ["/placeholder.svg?height=600&width=800"],
    collaborators: [
      { name: "HackerFab", logo: "/partners/hackerfab.avif", url: "https://hackerfab.ece.cmu.edu/#next" },
    ],
    sponsors: [
    ],
  },
  {
    id: "measurement",
    translationKey: "measurement",
    authors: [
    ],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    collaborators: [],
    sponsors: [],
  },
  {
    id: "smartcane",
    translationKey: "smartcane",
    authors: [],
    images: [
      "/projects/cane1.jpg",
    ],
    collaborators: [],
    sponsors: [{ name: "STMicroelectronics", logo: "/sponsors/st.svg", url: "https://www.st.com" }],
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
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
    <div className="min-h-screen bg-white">
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

        <section className="w-full py-12 md:py-24 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#081F3E] mb-4">
              {t("sections.projects.projectDetails")}
            </h2>
            <p className="text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mb-12">
              {t(`sections.projects.projects.${project.translationKey}.fullDescription`)}
            </p>

            {project.authors && project.authors.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-[#081F3E] mb-6">{t("sections.projects.projectAuthors")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.authors.map((author, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      {author.image ? (
                        <Image
                          src={author.image || "/placeholder.svg"}
                          alt={author.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-[50px] h-[50px] flex items-center justify-center">
                          <UserCircle2 className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-[#081F3E]">{author.name}</h4>
                        <p className="text-sm text-gray-500">{t(`sections.projects.roles.${author.roleKey}`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-[#081F3E] mb-6">{t("sections.projects.projectGallery")}</h3>
                <div className="relative">
                  <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex">
                      {project.images.map((image, index) => (
                        <div key={index} className="relative flex-[0_0_100%] min-w-0">
                          <div className="relative pt-[56.25%]">
                            <Image
                              src={image || "/placeholder.svg"}
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
                  {t("sections.projects.projectCollaborators")}
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
                        src={collaborator.logo || "/placeholder.svg"}
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
                <h3 className="text-xl font-semibold text-[#081F3E] mb-6">{t("sections.projects.projectSponsors")}</h3>
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
                        src={sponsor.logo || "/placeholder.svg"}
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

