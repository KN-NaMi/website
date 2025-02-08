import { create } from 'zustand'

type LanguageStore = {
  language: 'en' | 'pl'
  setLanguage: (language: 'en' | 'pl') => void
  detectLanguage: () => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (language: 'en' | 'pl') => set({ language }),

  detectLanguage: () => {
    if (typeof navigator !== 'undefined' && navigator.language) {
      const languageCode = navigator.language.startsWith('pl') ? 'pl' : 'en'
      set({ language: languageCode })
    }
  }
}))

if (typeof window !== 'undefined') {
  useLanguageStore.getState().detectLanguage()
}
