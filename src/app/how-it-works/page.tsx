import { SaaSHeader } from "@/components/saas-header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { JsonLd, howToSchema, webPageSchema } from "@/components/json-ld-schema"
import { Calculator, Eye, MousePointer, DollarSign, TrendingUp, Target, Lightbulb, HelpCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { RelatedContent } from "@/components/related-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How AdSense Revenue Calculator Works - Step by Step Guide",
  description:
    "Learn how our AdSense calculator estimates your Google AdSense earnings using page views, CTR, and CPC. Understand RPM, eCPM, and revenue calculations.",
  keywords:
    "how AdSense calculator works, AdSense revenue calculation, CTR CPC RPM, Google AdSense earnings formula, website monetization guide",
  alternates: {
    canonical: "https://adsensecalculator.online/how-it-works",
  },
  openGraph: {
    title: "How AdSense Revenue Calculator Works - Step by Step Guide",
    description:
      "Learn how our AdSense calculator estimates your Google AdSense earnings using page views, CTR, and CPC",
    url: "https://adsensecalculator.online/how-it-works",
    siteName: "AdsenseCalculator.online",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://adsensecalculator.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AdSense Calculator - How It Works Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How AdSense Revenue Calculator Works",
    description: "Learn how to calculate your Google AdSense earnings with our step-by-step guide",
    images: ["https://adsensecalculator.online/og-image.jpg"],
    creator: "@adsensecalc",
  },
}

export default function HowItWorksPage() {
  const howToData = howToSchema({
    name: "How to Calculate AdSense Revenue",
    description: "Learn how to calculate your Google AdSense earnings using page views, CTR, and CPC",
    totalTime: "PT5M",
    estimatedCost: "0",
    steps: [
      {
        name: "Input Your Data",
        text: "Enter your daily page views, expected CTR (Click-Through Rate), and estimated CPC (Cost Per Click) into the calculator. These are the three fundamental metrics needed for AdSense revenue calculation.",
      },
      {
        name: "Calculate Daily Clicks",
        text: "The calculator computes your daily ad clicks using the formula: Daily Clicks = Page Views × (CTR ÷ 100). For example, 10,000 page views with a 2% CTR equals 200 daily clicks.",
      },
      {
        name: "Calculate Daily Revenue",
        text: "Your daily revenue is calculated by multiplying daily clicks by your CPC: Daily Revenue = Daily Clicks × CPC. If you have 200 clicks at $0.50 CPC, that's $100 daily revenue.",
      },
      {
        name: "Project Monthly & Yearly Earnings",
        text: "The calculator projects your earnings over time by multiplying daily revenue by 30 for monthly estimates and by 365 for yearly projections, giving you a comprehensive view of your potential AdSense income.",
      },
    ],
  })

  const pageData = webPageSchema({
    name: "How AdSense Revenue Calculator Works",
    description:
      "Comprehensive guide explaining how to calculate Google AdSense earnings using our free calculator tool",
    url: "https://adsensecalculator.online/how-it-works",
    datePublished: "2024-01-01",
    dateModified: "2025-01-01",
  })

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={howToData} />
      <JsonLd data={pageData} />

      <SaaSHeader />
      <Breadcrumb />

      <main className="flex-1">
        <PageHero
          icon={Calculator}
          badge="How It Works"
          title={
            <>
              How Our <span className="text-primary">AdSense Calculator</span> Works
            </>
          }
          description="Understanding the math behind AdSense revenue calculations and how to use our tool effectively"
        />

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary">How It Works</Badge>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    The AdSense Revenue Formula
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-center text-lg">
                      <strong>Daily Revenue = Page Views × CTR × CPC</strong>
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our AdSense calculator uses this fundamental formula to estimate your potential earnings. Each
                    component plays a crucial role in determining your final revenue.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Eye className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Page Views</CardTitle>
                    <CardDescription>The foundation of your earnings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Page views represent the total number of pages visited on your website daily. More page views
                      generally mean more ad impressions and higher earning potential.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <MousePointer className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle className="text-lg">Click-Through Rate (CTR)</CardTitle>
                    <CardDescription>Percentage of visitors who click ads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      CTR is the percentage of page views that result in ad clicks. A typical CTR ranges from 0.5% to
                      3%, depending on your niche, ad placement, and audience engagement.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <DollarSign className="h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-lg">Cost Per Click (CPC)</CardTitle>
                    <CardDescription>Revenue earned per ad click</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      CPC is the amount you earn each time someone clicks on an ad. It varies by niche, with finance and
                      insurance typically having higher CPCs than entertainment.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Advanced Metrics Explained
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        RPM (Revenue Per Mille)
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                        RPM represents how much you earn per 1,000 page views. It's calculated as:
                      </p>
                      <div className="bg-muted p-3 rounded text-sm font-mono">
                        RPM = (Total Revenue ÷ Page Views) × 1000
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-secondary" />
                        eCPM (Effective Cost Per Mille)
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                        eCPM shows the effective cost per 1,000 impressions. For page view calculations, it equals RPM:
                      </p>
                      <div className="bg-muted p-3 rounded text-sm font-mono">
                        eCPM = (Total Revenue ÷ Impressions) × 1000
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Step-by-Step Calculation Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Input Your Data</h4>
                        <p className="text-sm text-muted-foreground">
                          Enter your daily page views, expected CTR, and estimated CPC
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Calculate Daily Clicks</h4>
                        <p className="text-sm text-muted-foreground">Daily Clicks = Page Views × (CTR ÷ 100)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Calculate Daily Revenue</h4>
                        <p className="text-sm text-muted-foreground">Daily Revenue = Daily Clicks × CPC</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold">Project Monthly & Yearly</h4>
                        <p className="text-sm text-muted-foreground">
                          Multiply daily revenue by 30 (monthly) and 365 (yearly)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        <strong>Seasonal Variations:</strong> AdSense earnings fluctuate throughout the year, with Q4
                        typically showing higher CPCs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        <strong>Geographic Location:</strong> Visitor location significantly impacts CPC rates, with
                        tier-1 countries generally paying more
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        <strong>Niche Dependency:</strong> Different niches have varying CPC rates - finance, insurance,
                        and legal typically pay more
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        <strong>Ad Placement:</strong> Above-the-fold ads typically perform better than those below the
                        fold
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <RelatedContent
                title="Continue Learning"
                description="Explore more resources to maximize your AdSense revenue"
                links={[
                  {
                    title: "AdSense Optimization Tips",
                    description: "Learn proven strategies to increase your CTR, CPC, and overall AdSense earnings",
                    href: "/optimization-tips",
                    icon: Lightbulb,
                  },
                  {
                    title: "Frequently Asked Questions",
                    description: "Get answers to common questions about AdSense revenue calculation and optimization",
                    href: "/faq",
                    icon: HelpCircle,
                  },
                  {
                    title: "Try the Calculator",
                    description: "Calculate your potential AdSense earnings with our free online tool",
                    href: "/#calculator-section",
                    icon: Calculator,
                  },
                  {
                    title: "Contact Support",
                    description: "Need help? Our team is ready to assist you with your AdSense questions",
                    href: "/contact",
                    icon: TrendingUp,
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
