import { SaaSHeader } from "@/components/saas-header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertCircle, Scale, Ban, RefreshCw, Mail } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | AdsenseCalculator.online - Usage Terms and Conditions",
  description:
    "Read our terms of service to understand your rights and responsibilities when using AdsenseCalculator.online. Last updated Octobar 2025.",
  alternates: {
    canonical: "https://adsensecalculator.online/terms",
  },
  openGraph: {
    title: "Terms of Service | AdsenseCalculator.online",
    description: "Terms and conditions for using our AdSense revenue calculator tool.",
    type: "website",
    url: "https://adsensecalculator.online/terms",
    siteName: "AdsenseCalculator.online",
    images: [
      {
        url: "https://adsensecalculator.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - AdsenseCalculator.online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | AdsenseCalculator.online",
    description: "Terms and conditions for using our AdSense revenue calculator tool.",
    images: ["https://adsensecalculator.online/og-image.jpg"],
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SaaSHeader />
      <Breadcrumb />

      <main className="flex-1">
        <PageHero icon={Scale} title="Terms of Service" description="Last updated: January 2025" />

        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileText className="h-5 w-5 text-accent" />
                    Agreement to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    By accessing and using AdsenseCalculator.online ("the Service"), you agree to be bound by these
                    Terms of Service and all applicable laws and regulations. If you do not agree with any of these
                    terms, you are prohibited from using this Service.
                  </p>
                  <p>
                    These terms apply to all visitors, users, and others who access or use the Service. We reserve the
                    right to update these terms at any time without prior notice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <AlertCircle className="h-5 w-5 text-accent" />
                    Service Description and Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    AdsenseCalculator.online is a free online tool designed to help website owners and content creators
                    estimate potential earnings from Google AdSense based on various input parameters.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Important Disclaimers</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        This tool is <strong className="text-foreground">not affiliated with or endorsed by</strong>{" "}
                        Google LLC or Google AdSense
                      </li>
                      <li>
                        All calculations are <strong className="text-foreground">estimates only</strong> and actual
                        earnings may vary significantly
                      </li>
                      <li>
                        Results depend on numerous factors including content quality, audience engagement, ad placement,
                        and market conditions
                      </li>
                      <li>We do not guarantee any specific earnings or results from using this calculator</li>
                      <li>
                        This tool should be used for <strong className="text-foreground">planning purposes only</strong>
                        , not as financial advice
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Ban className="h-5 w-5 text-accent" />
                    Acceptable Use Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>You agree to use the Service only for lawful purposes and in accordance with these Terms.</p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">You agree NOT to:</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Use the Service in any way that violates applicable laws or regulations</li>
                      <li>Attempt to gain unauthorized access to any portion of the Service</li>
                      <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                      <li>Use automated systems or software to extract data from the Service</li>
                      <li>Impersonate or attempt to impersonate the Service, its employees, or other users</li>
                      <li>Use the Service to transmit malicious code, viruses, or harmful materials</li>
                      <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Scale className="h-5 w-5 text-accent" />
                    Intellectual Property Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Service and its original content, features, and functionality are owned by
                    AdsenseCalculator.online and are protected by international copyright, trademark, patent, trade
                    secret, and other intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit
                    any part of the Service without our express written permission.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <AlertCircle className="h-5 w-5 text-accent" />
                    Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    To the maximum extent permitted by law, AdsenseCalculator.online shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages resulting from:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Your use or inability to use the Service</li>
                    <li>Any inaccuracies or errors in the calculator results</li>
                    <li>Any business decisions made based on calculator estimates</li>
                    <li>Any unauthorized access to or use of our servers</li>
                    <li>Any interruption or cessation of the Service</li>
                    <li>Any bugs, viruses, or harmful code transmitted through the Service</li>
                  </ul>
                  <p className="pt-4">
                    The Service is provided "as is" and "as available" without warranties of any kind, either express or
                    implied.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <RefreshCw className="h-5 w-5 text-accent" />
                    Changes to Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any
                    time with or without notice. We shall not be liable to you or any third party for any modification,
                    suspension, or discontinuance of the Service.
                  </p>
                  <p>
                    We may also impose limits on certain features or restrict your access to parts or all of the Service
                    without notice or liability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Mail className="h-5 w-5 text-accent" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="space-y-2">
                    <p>
                      <strong className="text-foreground">Email:</strong>{" "}
                      <a href="mailto:legal@adsensecalculator.online" className="text-accent hover:underline">
                        legal@adsensecalculator.online
                      </a>
                    </p>
                    <p>
                      <strong className="text-foreground">Website:</strong>{" "}
                      <a href="https://adsensecalculator.online" className="text-accent hover:underline">
                        adsensecalculator.online
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <h3 className="font-semibold text-foreground text-base">Governing Law</h3>
                    <p>
                      These Terms shall be governed by and construed in accordance with applicable laws, without regard
                      to conflict of law provisions. Any disputes arising from these Terms or your use of the Service
                      shall be resolved through binding arbitration.
                    </p>
                    <h3 className="font-semibold text-foreground text-base">Severability</h3>
                    <p>
                      If any provision of these Terms is found to be unenforceable or invalid, that provision shall be
                      limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain
                      in full force and effect.
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
