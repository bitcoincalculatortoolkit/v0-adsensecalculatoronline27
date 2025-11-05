"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { LanguageDropdown } from "@/components/language-dropdown"
import { useI18n } from "@/lib/i18n/context"
import Image from "next/image"

export function SaaSHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useI18n()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-4 left-0 right-0 z-50 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? "border-border/60 bg-background/98 backdrop-blur-md shadow-lg"
              : "border-border/50 bg-background/95 backdrop-blur-sm shadow-md"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-semibold text-foreground transition-opacity hover:opacity-70 group"
              aria-label="AdSense Calculator Home"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2e403ae7-5df9-46fa-9e11-8c853a9ff0f6/generated_images/ultra-minimalist-modern-logo-design-for--8af054ed-20251029164423.jpg"
                  alt={t.common.brandName}
                  width={32}
                  height={32}
                  className="rounded-lg object-contain transition-transform duration-200 group-hover:scale-110"
                />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">{t.common.brandName}</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              <Link
                href="/"
                className="px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
              >
                {t.nav.howItWorks}
              </Link>
              <Link
                href="/optimization-tips"
                className="px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
              >
                {t.nav.optimizationTips}
              </Link>
              <Link
                href="/faq"
                className="px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
              >
                {t.nav.faq}
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
              >
                {t.nav.contact}
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <LanguageDropdown />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden py-4 px-6 border-t border-border/50 animate-in slide-in-from-top-2 duration-200"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation menu">
                <Link
                  href="/"
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.howItWorks}
                </Link>
                <Link
                  href="/optimization-tips"
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.optimizationTips}
                </Link>
                <Link
                  href="/faq"
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.faq}
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.contact}
                </Link>

                <div className="sm:hidden pt-2 mt-2 border-t border-border/40">
                  <LanguageDropdown />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
