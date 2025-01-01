'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

const semesters = [
  { id: 'fall2023', name: 'fall2023', image: '/placeholder.svg?height=400&width=600' },
  { id: 'spring2023', name: 'spring2023', image: '/placeholder.svg?height=400&width=600' },
  { id: 'fall2022', name: 'fall2022', image: '/placeholder.svg?height=400&width=600' },
]

export default function ExtendedAboutPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#081F3E] mb-6">
          {t('sections.extendedAbout.title')}
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#081F3E] mb-4">
            {t('sections.extendedAbout.mission.title')}
          </h2>
          <p className="text-gray-600 mb-4">
            {t('sections.extendedAbout.mission.description1')}
          </p>
          <p className="text-gray-600 mb-4">
            {t('sections.extendedAbout.mission.description2')}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#081F3E] mb-4">
            {t('sections.extendedAbout.team.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('sections.extendedAbout.team.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semesters.map((semester) => (
              <div key={semester.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={semester.image}
                  alt={`${t(`sections.extendedAbout.team.semesters.${semester.name}`)}`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#081F3E]">
                    {t(`sections.extendedAbout.team.semesters.${semester.name}`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

