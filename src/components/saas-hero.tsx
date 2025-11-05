"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function SaaSHero() {
  const { t } = useI18n()

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator-section")
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 px-4" aria-labelledby="hero-heading">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            {t.hero.badge}
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-foreground">{t.hero.title}</span>{" "}
            <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>{" "}
            <span className="text-foreground">{t.hero.titleEnd}</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={scrollToCalculator}
              aria-label={t.hero.cta}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="pt-12 flex flex-col items-center gap-6">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {t.hero.trustedBy}
            </span>
            <div className="flex items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 tracking-tight">
                  {t.hero.activeUsers}
                </div>
                <p className="text-sm text-muted-foreground">{t.hero.activeUsersLabel}</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 tracking-tight">
                  {t.hero.calculations}
                </div>
                <p className="text-sm text-muted-foreground">{t.hero.calculationsLabel}</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 tracking-tight">
                  {t.hero.countries}
                </div>
                <p className="text-sm text-muted-foreground">{t.hero.countriesLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
