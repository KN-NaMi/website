'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

const navLinks = [
  { name: 'nav.about', href: '/#about' },
  { name: 'nav.projects', href: '/#projects' },
  { name: 'nav.partners', href: '/#partners' },
  { name: 'nav.contact', href: '/#contact' },
]

const socialLinks = [
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/nami.pwr',
    label: 'Instagram',
    description: 'Follow us for updates',
    handle: '@nami.pwr'
  },
  { 
    icon: Facebook, 
    href: 'https://www.facebook.com/profile.php?id=61569550958468',
    label: 'Facebook',
    description: 'Join our community',
    handle: 'KN NaMi'
  },
  { 
    icon: Mail, 
    href: 'mailto:kn.nami@pwr.edu.pl',
    label: 'Email',
    description: 'Get in touch with us',
    handle: 'kn.nami@pwr.edu.pl'
  },
]

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center">
            <Link href="/" className="text-2xl font-bold text-[#081F3E]">
            <span className="sr-only">KN NaMi</span>
            <img
                src="/logo/logo_dark.svg"
                alt="KN NaMi"
                className="h-[4rem] w-[4rem]"
            />
            </Link>
            <p className="mt-1 text-sm text-gray-600">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-[#081F3E] transition-colors"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">
              {t('footer.connectWithUs')}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-[#081F3E] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

