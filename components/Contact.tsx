'use client'

import { Instagram, Facebook, Mail } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'
// import { useScrollAnimation } from '@/hooks/useScrollAnimation' // Removed
import { cn } from '@/lib/utils'

const contactInfo = [
  { 
    icon: Instagram, 
    type: 'instagram',
    href: 'https://www.instagram.com/nami.pwr',
  },
  { 
    icon: Facebook, 
    type: 'facebook',
    href: 'https://www.facebook.com/profile.php?id=61569550958468',
  },
  { 
    icon: Mail, 
    type: 'email',
    href: 'mailto:kn.nami@pwr.edu.pl',
  },
]

export default function Contact() {
  const t = useTranslations()

  return (
    <section 
      id="contact" 
      className={cn(
        "py-32 bg-white"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto container">
        <div className="mb-14">
          <span className="text-sm font-semibold text-gray-600">{t('sections.contact.subtitle')}</span>
          <h2 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl text-[#081F3E]">
            {t('sections.contact.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('sections.contact.description')}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div 
              key={item.type}
              className=""
            >
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-gray-100">
                <item.icon className="h-6 w-auto text-[#081F3E]" />
              </span>
              <p className="mb-2 text-lg font-semibold text-[#081F3E]">
                {t(`sections.contact.social.${item.type}.label`)}
              </p>
              <p className="mb-3 text-gray-600">
                {t(`sections.contact.social.${item.type}.description`)}
              </p>
              <Link 
                href={item.href}
                className="font-semibold text-[#081F3E] hover:underline"
                target={item.type !== 'email' ? '_blank' : undefined}
                rel={item.type !== 'email' ? 'noopener noreferrer' : undefined}
              >
                {t(`sections.contact.social.${item.type}.handle`)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

