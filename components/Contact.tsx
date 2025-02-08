'use client'

import { Instagram, Facebook, Mail } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion' // Import motion z framer-motion

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
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl text-[#081F3E]">
            {t('sections.contact.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('sections.contact.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-10 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.type}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 + index * 0.2 }}
            >
              <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-gray-100">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}