import { useLanguageStore } from '@/lib/language'
import enMessages from '@/messages/en.json'
import plMessages from '@/messages/pl.json'

const messages = {
  en: enMessages,
  pl: plMessages,
}

export function useTranslations() {
  const { language } = useLanguageStore()

  return function translate(key: string) {
    const keys = key.split('.')
    let current: any = messages[language as keyof typeof messages]
    
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return key
      }
      current = current[k]
    }
    
    return current
  }
}

