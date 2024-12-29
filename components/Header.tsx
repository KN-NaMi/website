'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Menu } from 'lucide-react'
import { useLanguageStore } from '@/lib/language'
import { useTranslations } from '@/hooks/useTranslations'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguageStore()
  const t = useTranslations()

  const navItems = [
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.projects'), href: '/#projects' },
    { name: t('nav.partners'), href: '/#partners' },
    { name: t('nav.education'), href: '/#education' },
    { name: t('nav.contact'), href: '/#contact' },
  ]

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const targetId = href.replace('/#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    setIsOpen(false)
  }

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode)
  }

  return (
    <header className="w-full border-b border-gray-200">
      <div className="container flex items-center justify-between py-4 mx-auto container">
        <Link href="/" className="flex items-center space-x-2">
            <span className="sr-only">KN NaMi</span>
            <img
                src="/logo/logo_dark.svg"
                alt="KN NaMi"
                className="h-[4rem] w-[4rem]"
            />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleScroll(e, item.href)}
                className="text-md font-medium text-gray-600 hover:text-[#081F3E] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Switch language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={language === lang.code ? "bg-accent" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-lg text-gray-600 hover:text-[#081F3E] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-2 py-2 text-lg ${
                      language === lang.code 
                        ? "text-[#081F3E] bg-accent" 
                        : "text-gray-600 hover:text-[#081F3E]"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

