"use client"

import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TrendingUp,
  Zap,
  Globe,
  Shield,
  BarChart3,
  Calculator,
  LineChart,
  DollarSign,
  HelpCircle,
  Lightbulb,
} from "lucide-react"
import { SaaSHero } from "@/components/saas-hero"
import { SaaSHeader } from "@/components/saas-header"
import { useI18n } from "@/lib/i18n/context"
import dynamic from "next/dynamic"
import { RelatedContent } from "@/components/related-content"

const AdvancedAdSenseCalculator = dynamic(
  () => import("@/components/advanced-adsense-calculator").then((mod) => mod.AdvancedAdSenseCalculator),
  {
    loading: () => (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-4 border-accent/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-sm text-muted-foreground">Loading calculator...</p>
        </div>
      </div>
    ),
    ssr: false, // Disable SSR for calculator to improve initial page load
  },
)

export const HomeClient = () => {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SaaSHeader />

      <main className="flex-1">
        <SaaSHero />

        {/* Calculator section - Ultra minimal */}
        <section id="calculator-section" className="py-8 md:py-12 px-4" aria-labelledby="calculator-heading">
          <div className="container mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-lg border bg-card p-5 md:p-6">
              <div className="sr-only">
                <h2 id="calculator-heading">{t.calculator.title}</h2>
              </div>
              <AdvancedAdSenseCalculator />
            </div>
          </div>
        </section>

        {/* Calculator description - Ultra clean minimal SaaS */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Section Header - Minimal */}
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/5 border border-accent/10 mb-3">
                <Calculator className="w-2.5 h-2.5 text-accent" />
                <span className="text-[10px] font-medium text-accent uppercase tracking-wide">
                  {t.homepage.calculatorBadge}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 leading-tight">
                {t.homepage.calculatorTitle} <span className="text-accent">{t.homepage.calculatorTitleAccent}</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {t.homepage.calculatorSubtitle}
              </p>
            </div>

            {/* Feature Grid - 2x2 Minimal Cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <Card className="relative group overflow-hidden border hover:border-accent/20 transition-all duration-200">
                <CardHeader className="relative pb-2">
                  <div className="w-8 h-8 rounded-md bg-accent/5 flex items-center justify-center mb-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-medium">{t.homepage.instantRevenue.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-xs md:text-sm leading-relaxed">
                    {t.homepage.instantRevenue.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="relative group overflow-hidden border hover:border-accent/20 transition-all duration-200">
                <CardHeader className="relative pb-2">
                  <div className="w-8 h-8 rounded-md bg-accent/5 flex items-center justify-center mb-2">
                    <BarChart3 className="w-4 h-4 text-accent" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-medium">{t.homepage.dataDriven.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-xs md:text-sm leading-relaxed">
                    {t.homepage.dataDriven.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="relative group overflow-hidden border hover:border-accent/20 transition-all duration-200">
                <CardHeader className="relative pb-2">
                  <div className="w-8 h-8 rounded-md bg-accent/5 flex items-center justify-center mb-2">
                    <LineChart className="w-4 h-4 text-accent" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-medium">{t.homepage.visualAnalytics.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-xs md:text-sm leading-relaxed">
                    {t.homepage.visualAnalytics.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="relative group overflow-hidden border hover:border-accent/20 transition-all duration-200">
                <CardHeader className="relative pb-2">
                  <div className="w-8 h-8 rounded-md bg-accent/5 flex items-center justify-center mb-2">
                    <DollarSign className="w-4 h-4 text-accent" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-medium">{t.homepage.nicheSpecific.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-xs md:text-sm leading-relaxed">
                    {t.homepage.nicheSpecific.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section - Ultra minimal SaaS */}
        <section className="py-12 md:py-20 px-4 bg-muted/20" aria-labelledby="features-heading">
          <div className="container mx-auto max-w-5xl">
            {/* Section Header - Minimal */}
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/5 border border-accent/10 mb-3">
                <Zap className="w-2.5 h-2.5 text-accent" />
                <span className="text-[10px] font-medium text-accent uppercase tracking-wide">
                  {t.homepage.featuresBadge}
                </span>
              </div>
              <h2
                id="features-heading"
                className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 leading-tight"
              >
                {t.homepage.featuresTitle} <span className="text-accent">{t.homepage.featuresTitleAccent}</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {t.homepage.featuresSubtitle}
              </p>
            </div>

            {/* Feature Cards Grid - 4 columns minimal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              <Card className="relative group border hover:border-accent/20 transition-all duration-200 overflow-hidden">
                <CardHeader className="relative pb-2">
                  <div className="w-8 h-8 bg-accent/5 rounded-md flex items-center justify-center mb-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                  </div>
                  <CardTitle className="text-sm font-medium">{t.features.analytics.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-xs leading-relaxed">
                    {t.features.analytics.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="relative group border hover:border-accent/20 transition-all duration-200 overflow-hidden">
                <CardHeader className="relative pb-2">
                  <div className="w-8 h-8 bg-accent/5 rounded-md flex items-center justify-center mb-2">
                    <Zap className="h-4 w-4 text-accent" />
                  </div>
                  <CardTitle className="text-sm font-medium">{t.features.instant.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-xs leading-relaxed">
                    {t.features.instant.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="relative group border hover:border-accent/20 transition-all duration-200 overflow-hidden">
                <CardHeader className="relative pb-2">
                  <div className="w-8 h-8 bg-accent/5 rounded-md flex items-center justify-center mb-2">
                    <Globe className="h-4 w-4 text-accent" />
                  </div>
                  <CardTitle className="text-sm font-medium">{t.features.global.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-xs leading-relaxed">{t.features.global.description}</CardDescription>
                </CardContent>
              </Card>

              <Card className="relative group border hover:border-accent/20 transition-all duration-200 overflow-hidden">
                <CardHeader className="relative pb-2">
                  <div className="w-8 h-8 bg-accent/5 rounded-md flex items-center justify-center mb-2">
                    <Shield className="h-4 w-4 text-accent" />
                  </div>
                  <CardTitle className="text-sm font-medium">{t.features.professional.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-xs leading-relaxed">
                    {t.features.professional.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <RelatedContent
              title="Learn More About AdSense Revenue"
              description="Explore our comprehensive guides to maximize your Google AdSense earnings"
              links={[
                {
                  title: "How AdSense Calculator Works",
                  description:
                    "Understand the math behind AdSense revenue calculations and how to use our tool effectively",
                  href: "/how-it-works",
                  icon: Calculator,
                },
                {
                  title: "AdSense Optimization Tips",
                  description:
                    "Proven strategies to increase your AdSense earnings through CTR, CPC, and RPM optimization",
                  href: "/optimization-tips",
                  icon: Lightbulb,
                },
                {
                  title: "Frequently Asked Questions",
                  description: "Get answers to common questions about AdSense calculations and revenue maximization",
                  href: "/faq",
                  icon: HelpCircle,
                },
                {
                  title: "Contact Support",
                  description: "Have questions? Our team is here to help you maximize your AdSense revenue",
                  href: "/contact",
                  icon: Shield,
                },
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
