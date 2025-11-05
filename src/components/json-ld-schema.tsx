interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AdsenseCalculator.online",
  url: "https://adsensecalculator.online",
  logo: "https://adsensecalculator.online/icon-512.jpg",
  description:
    "Free AdSense revenue calculator to estimate your daily, monthly, and yearly Google Ad earnings accurately",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "support@adsensecalculator.online",
    availableLanguage: ["English", "Spanish"],
  },
  sameAs: [
    "https://twitter.com/adsensecalc",
    "https://facebook.com/adsensecalc",
    "https://linkedin.com/company/adsensecalc",
  ],
  founder: {
    "@type": "Person",
    name: "AdsenseCalculator Team",
  },
  foundingDate: "2024",
  knowsAbout: [
    "Google AdSense",
    "Website Monetization",
    "Digital Advertising",
    "Revenue Optimization",
    "CPC Calculation",
    "CTR Analysis",
  ],
}

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AdSense Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50000",
    bestRating: "5",
    worstRating: "1",
  },
  description:
    "Free AdSense revenue calculator to estimate your daily, monthly, and yearly Google Ad earnings accurately. Calculate CPC, CTR, and RPM with precision.",
  featureList: [
    "Real-time AdSense revenue calculations",
    "Daily, monthly, and yearly earnings estimates",
    "CPC and CTR optimization insights",
    "Advanced analytics and charts",
    "Multi-language support (English and Spanish)",
  ],
  screenshot: "https://adsensecalculator.online/og-image.jpg",
  url: "https://adsensecalculator.online",
  inLanguage: ["en", "es"],
  softwareVersion: "2.0",
  datePublished: "2024-01-01",
  dateModified: "2025-01-01",
  creator: {
    "@type": "Organization",
    name: "AdsenseCalculator.online",
  },
}

export const faqPageSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
})

export const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AdSense Revenue Calculator",
  url: "https://adsensecalculator.online",
  description: "Calculate your Google AdSense earnings with our free online calculator tool",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: "AdSense revenue estimation, CPC calculator, CTR calculator, RPM calculator",
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const articleSchema = (article: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  url: string
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    "@type": "Person",
    name: article.author,
  },
  publisher: {
    "@type": "Organization",
    name: "AdsenseCalculator.online",
    logo: {
      "@type": "ImageObject",
      url: "https://adsensecalculator.online/icon-512.jpg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url,
  },
  ...(article.image && {
    image: {
      "@type": "ImageObject",
      url: article.image,
    },
  }),
})

export const webPageSchema = (page: {
  name: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: page.name,
  description: page.description,
  url: page.url,
  ...(page.datePublished && { datePublished: page.datePublished }),
  ...(page.dateModified && { dateModified: page.dateModified }),
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "AdsenseCalculator.online",
    url: "https://adsensecalculator.online",
  },
  publisher: {
    "@type": "Organization",
    name: "AdsenseCalculator.online",
    logo: {
      "@type": "ImageObject",
      url: "https://adsensecalculator.online/icon-512.jpg",
    },
  },
})

export const howToSchema = (howTo: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; image?: string }>
  totalTime?: string
  estimatedCost?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: howTo.name,
  description: howTo.description,
  ...(howTo.totalTime && { totalTime: howTo.totalTime }),
  ...(howTo.estimatedCost && {
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: howTo.estimatedCost,
    },
  }),
  step: howTo.steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
    ...(step.image && {
      image: {
        "@type": "ImageObject",
        url: step.image,
      },
    }),
  })),
})

export const itemListSchema = (items: Array<{ name: string; url: string; description?: string }>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: item.url,
    ...(item.description && { description: item.description }),
  })),
})

export const videoObjectSchema = (video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl: string
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  duration: video.duration,
  contentUrl: video.contentUrl,
  publisher: {
    "@type": "Organization",
    name: "AdsenseCalculator.online",
    logo: {
      "@type": "ImageObject",
      url: "https://adsensecalculator.online/icon-512.jpg",
    },
  },
})
