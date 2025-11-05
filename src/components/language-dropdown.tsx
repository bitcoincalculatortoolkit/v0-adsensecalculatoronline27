"use client"

import { Button } from "@/components/ui/button"
import { Globe, Check } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useI18n } from "@/lib/i18n/context"

const languages = [
  { code: "en" as const, name: "English", flag: "🇺🇸" },
  { code: "es" as const, name: "Español", flag: "🇪🇸" },
]

export function LanguageDropdown() {
  const { locale, setLocale, t } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={t.common.language}
        >
          <Globe className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">{languages.find((lang) => lang.code === locale)?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLocale(language.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden="true">{language.flag}</span>
              <span>{language.name}</span>
            </span>
            {locale === language.code && <Check className="w-4 h-4 text-accent" aria-hidden="true" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
