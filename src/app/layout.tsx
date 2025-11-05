import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { SchemaMarkup, webApplicationSchema } from "@/components/schema-markup"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { JsonLd, organizationSchema, softwareApplicationSchema } from "@/components/json-ld-schema"
import { LoadingSpinner } from "@/components/loading-spinner"
import "./globals.css"
import { I18nProvider } from "@/lib/i18n/context"
import ErrorReporter from "@/components/ErrorReporter"

const VisualEditsMessenger =
  process.env.NODE_ENV === "development" ? require("../visual-edits/VisualEditsMessenger").default : null

export const metadata: Metadata = {
  title: "AdSense Calculator | Estimate Google Ad Earnings Easily",
  description:
    "Free AdSense revenue calculator to estimate your daily, monthly, and yearly Google Ad earnings accurately. Try the online AdSense Calculator tool.",
  keywords:
    "AdSense calculator, AdSense revenue, Google AdSense earnings, CPC calculator, CTR calculator, RPM calculator, AdSense income estimator, Google Ad earnings, website monetization",
  authors: [{ name: "AdsenseCalculator.online" }],
  creator: "AdsenseCalculator.online",
  publisher: "AdsenseCalculator.online",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "AdSense Calculator | Estimate Google Ad Earnings Easily",
    description:
      "Free AdSense revenue calculator to estimate your daily, monthly, and yearly Google Ad earnings accurately.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    siteName: "AdsenseCalculator.online",
    url: "https://adsensecalculator.online",
    images: [
      {
        url: "https://adsensecalculator.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AdSense Calculator - Free Google AdSense Revenue Calculator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdSense Calculator | Estimate Google Ad Earnings Easily",
    description:
      "Free AdSense revenue calculator to estimate your daily, monthly, and yearly Google Ad earnings accurately.",
    images: ["https://adsensecalculator.online/og-image.jpg"],
    creator: "@adsensecalc",
    site: "@adsensecalc",
  },
  alternates: {
    canonical: "https://adsensecalculator.online",
    languages: {
      en: "https://adsensecalculator.online",
      es: "https://adsensecalculator.online/es",
      "x-default": "https://adsensecalculator.online",
    },
  },
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareApplicationSchema} />
        <SchemaMarkup type="WebApplication" data={webApplicationSchema} />

        {/* Preload for critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          as="style"
        />
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="alternate" hrefLang="en" href="https://adsensecalculator.online/" />
        <link rel="alternate" hrefLang="es" href="https://adsensecalculator.online/es/" />
        <link rel="alternate" hrefLang="x-default" href="https://adsensecalculator.online/" />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* dns-prefetch for Google Fonts */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta tags for performance hints */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="antialiased">
        <ErrorReporter />

        <I18nProvider>
          <PerformanceMonitor />
          <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        </I18nProvider>
        {VisualEditsMessenger && <VisualEditsMessenger />}
      </body>
    </html>
  )
}
