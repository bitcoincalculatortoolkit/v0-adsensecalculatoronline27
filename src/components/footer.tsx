"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        {/* Top Section - CTA */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-xs font-medium text-accent mb-5">
            <span className="inline-block w-1 h-1 rounded-full bg-accent" />
            {t.footer.cta.badge}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight">
            {t.footer.cta.title}{" "}
            <span className="bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent">
              {t.footer.cta.titleAccent}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            {t.footer.cta.subtitle}
          </p>
          <Button
            size="lg"
            className="group relative h-12 px-8 text-sm font-medium rounded-lg bg-gradient-to-r from-accent to-accent/90 text-white hover:from-accent/90 hover:to-accent shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
            asChild
          >
            <Link href="/#calculator-section" className="flex items-center gap-2">
              {t.footer.cta.button}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2e403ae7-5df9-46fa-9e11-8c853a9ff0f6/generated_images/ultra-minimalist-modern-logo-design-for--8af054ed-20251029164423.jpg"
                  alt="AdsenseCalculator.online logo - Free AdSense revenue calculator tool"
                  width={32}
                  height={32}
                  className="rounded-lg object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <span className="font-semibold text-sm tracking-tight">{t.common.brandName}</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{t.footer.description}</p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">{t.footer.product}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center group"
                >
                  {t.footer.calculators.adsense}
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground/40 cursor-not-allowed text-sm">
                  {t.footer.calculators.cpc} <span className="text-xs">{t.footer.calculators.comingSoon}</span>
                </span>
              </li>
              <li>
                <span className="text-muted-foreground/40 cursor-not-allowed text-sm">
                  {t.footer.calculators.ctr} <span className="text-xs">{t.footer.calculators.comingSoon}</span>
                </span>
              </li>
              <li>
                <span className="text-muted-foreground/40 cursor-not-allowed text-sm">
                  {t.footer.calculators.rpm} <span className="text-xs">{t.footer.calculators.comingSoon}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">{t.footer.resources}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center group"
                >
                  {t.nav.howItWorks}
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/optimization-tips"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center group"
                >
                  {t.nav.optimizationTips}
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center group"
                >
                  {t.nav.faq}
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground/40 cursor-not-allowed text-sm">
                  {t.footer.blog} <span className="text-xs">{t.footer.calculators.comingSoon}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">{t.footer.legal}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center group"
                >
                  {t.nav.privacy}
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center group"
                >
                  {t.nav.terms}
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center group"
                >
                  {t.nav.contact}
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              {t.footer.madeWith} <span className="text-accent animate-pulse">❤</span> {t.footer.for}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
