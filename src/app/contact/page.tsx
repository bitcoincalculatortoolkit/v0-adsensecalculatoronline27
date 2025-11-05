"use client"

import { ContactForm } from "@/components/contact-form"
import { SaaSHeader } from "@/components/saas-header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Mail, MessageSquare, Clock } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { Breadcrumb } from "@/components/breadcrumb"

export const dynamic = "force-dynamic"

// For client components, metadata should be in a parent layout or moved to a server component wrapper

export default function ContactPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex flex-col">
      <SaaSHeader />
      <Breadcrumb />

      <main className="flex-1">
        <PageHero icon={Mail} title={t.contact.title} description={t.contact.subtitle} />

        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">{/* Title and subtitle moved to PageHero */}</div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-2">{t.contact.email.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.contact.email.description}</p>
                <a
                  href="mailto:support@adsensecalculator.online"
                  className="text-sm text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  support@adsensecalculator.online
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-2">{t.contact.chat.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.contact.chat.description}</p>
                <span className="text-sm text-muted-foreground/50">{t.common.soon}</span>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-2">{t.contact.response.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.contact.response.description}</p>
                <span className="text-sm font-semibold text-accent">{t.contact.response.time}</span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">{t.contact.form.title}</h2>
                <ContactForm />
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">{t.contact.faq.title}</h3>
              <p className="text-muted-foreground mb-4">{t.contact.faq.description}</p>
              <a
                href="/faq"
                className="inline-flex items-center text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {t.contact.faq.link}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
