"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { en, type Translations } from "./locales/en"
import { es } from "./locales/es"

type Locale = "en" | "es"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations: Record<Locale, Translations> = {
  en,
  es,
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  // Load saved language preference on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && (savedLocale === "en" || savedLocale === "es")) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = newLocale
  }

  const value = {
    locale,
    setLocale,
    t: translations[locale],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    // Return default English translations during SSR/SSG
    return {
      locale: "en" as Locale,
      setLocale: () => {},
      t: translations.en,
    }
  }
  return context
}
