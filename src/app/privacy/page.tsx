import { SaaSHeader } from "@/components/saas-header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | AdsenseCalculator.online - Your Data Protection Rights",
  description:
    "Learn how we protect your privacy and handle your data at AdsenseCalculator.online. Comprehensive privacy policy. Last updated Octobar 2025.",
  alternates: {
    canonical: "https://adsensecalculator.online/privacy",
  },
  openGraph: {
    title: "Privacy Policy | AdsenseCalculator.online",
    description: "Your privacy matters. Learn how we protect and handle your data.",
    type: "website",
    url: "https://adsensecalculator.online/privacy",
    siteName: "AdsenseCalculator.online",
    images: [
      {
        url: "https://adsensecalculator.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - AdsenseCalculator.online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AdsenseCalculator.online",
    description: "Your privacy matters. Learn how we protect and handle your data.",
    images: ["https://adsensecalculator.online/og-image.jpg"],
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SaaSHeader />
      <Breadcrumb />

      <main className="flex-1">
        <PageHero icon={Shield} title="Privacy Policy" description="Last updated: January 2025" />

        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Eye className="h-5 w-5 text-accent" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At AdsenseCalculator.online, we are committed to protecting your privacy. We collect minimal
                    information necessary to provide and improve our services.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Usage Data</h3>
                    <p>
                      We collect anonymous usage data including page views, calculator interactions, and feature usage
                      patterns. This data helps us understand how users interact with our tool and identify areas for
                      improvement.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Calculator Inputs</h3>
                    <p>
                      Your calculator inputs (page views, CTR, CPC) are processed locally in your browser and are not
                      stored on our servers unless you explicitly choose to save calculations (feature coming soon).
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Technical Information</h3>
                    <p>
                      We automatically collect technical information such as browser type, device type, IP address, and
                      referring URLs to ensure optimal performance and security.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Database className="h-5 w-5 text-accent" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>We use the collected information for the following purposes:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>To provide and maintain our AdSense Calculator service</li>
                    <li>To improve user experience and optimize calculator accuracy</li>
                    <li>To analyze usage patterns and develop new features</li>
                    <li>To detect and prevent technical issues and security threats</li>
                    <li>To communicate important updates and service announcements</li>
                    <li>To comply with legal obligations and enforce our terms of service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Lock className="h-5 w-5 text-accent" />
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We implement industry-standard security measures to protect your information from unauthorized
                    access, alteration, disclosure, or destruction.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Security Measures</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>SSL/TLS encryption for all data transmission</li>
                      <li>Secure hosting infrastructure with regular security audits</li>
                      <li>Access controls and authentication for administrative functions</li>
                      <li>Regular security updates and vulnerability assessments</li>
                      <li>Data minimization practices to collect only necessary information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <UserCheck className="h-5 w-5 text-accent" />
                    Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      <strong className="text-foreground">Access:</strong> Request access to your personal data
                    </li>
                    <li>
                      <strong className="text-foreground">Correction:</strong> Request correction of inaccurate data
                    </li>
                    <li>
                      <strong className="text-foreground">Deletion:</strong> Request deletion of your personal data
                    </li>
                    <li>
                      <strong className="text-foreground">Opt-out:</strong> Opt-out of analytics and tracking
                    </li>
                    <li>
                      <strong className="text-foreground">Portability:</strong> Request a copy of your data in a
                      portable format
                    </li>
                  </ul>
                  <p className="pt-4">
                    To exercise any of these rights, please contact us at{" "}
                    <a href="mailto:privacy@adsensecalculator.online" className="text-accent hover:underline">
                      privacy@adsensecalculator.online
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileText className="h-5 w-5 text-accent" />
                    Cookies and Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience and analyze site usage.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Types of Cookies</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        <strong className="text-foreground">Essential Cookies:</strong> Required for basic site
                        functionality
                      </li>
                      <li>
                        <strong className="text-foreground">Analytics Cookies:</strong> Help us understand user behavior
                        and improve our service
                      </li>
                      <li>
                        <strong className="text-foreground">Preference Cookies:</strong> Remember your settings and
                        preferences
                      </li>
                    </ul>
                  </div>
                  <p>
                    You can control cookie preferences through your browser settings. Note that disabling certain
                    cookies may affect site functionality.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <h3 className="font-semibold text-foreground text-base">Changes to This Policy</h3>
                    <p>
                      We may update this privacy policy from time to time. We will notify you of any changes by posting
                      the new policy on this page and updating the "Last updated" date.
                    </p>
                    <h3 className="font-semibold text-foreground text-base">Contact Us</h3>
                    <p>
                      If you have any questions about this privacy policy, please contact us at{" "}
                      <a href="mailto:privacy@adsensecalculator.online" className="text-accent hover:underline">
                        privacy@adsensecalculator.online
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
