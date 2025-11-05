import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
}

export function SEOHead({
  title = "AdSense Revenue Calculator - Estimate Your Google AdSense Earnings",
  description = "Free AdSense calculator to estimate your Google AdSense earnings. Calculate daily, monthly, and yearly revenue based on page views, CTR, and CPC.",
  keywords = "AdSense calculator, Google AdSense revenue, AdSense earnings estimator, website monetization, CPC calculator, CTR calculator, RPM calculator",
  canonicalUrl = "https://adsensecalculator.online",
  ogImage = "/og-image.png",
}: SEOHeadProps) {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

      {/* SEO Meta Tags */}
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="AdSense Revenue Calculator" />

      {/* Twitter Card */}
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon and app icons */}
      <link rel="icon" href="/icon.jpg" type="image/jpeg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
      <link rel="manifest" href="/manifest.webmanifest" />

      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
    </Head>
  )
}
