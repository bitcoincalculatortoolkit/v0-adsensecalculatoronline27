interface SchemaMarkupProps {
  type: "WebApplication" | "Article" | "FAQPage" | "HowTo"
  data: Record<string, any>
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }

    return JSON.stringify(baseSchema)
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateSchema() }} />
}

// Predefined schema templates
export const webApplicationSchema = {
  name: "AdSense Revenue Calculator",
  description: "Free AdSense calculator to estimate your Google AdSense earnings based on page views, CTR, and CPC.",
  url: "https://adsensecalculator.online",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "AdSense Revenue Calculation",
    "Daily, Monthly, Yearly Estimates",
    "CTR and CPC Analysis",
    "RPM Calculator",
    "Performance Optimization Tips",
  ],
  author: {
    "@type": "Organization",
    name: "AdSense Calculator Pro",
  },
  publisher: {
    "@type": "Organization",
    name: "AdSense Calculator Pro",
  },
}

export const faqPageSchema = {
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is the AdSense calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AdSense calculator provides estimates based on the inputs you provide. While the calculations use industry-standard formulas, actual earnings can vary significantly due to factors like seasonality, audience location, niche competition, and Google's auction system.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good CTR for AdSense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good CTR (Click-Through Rate) for AdSense typically ranges from 1% to 3%. However, this varies greatly by niche, audience, and ad placement. Finance and technology sites often see higher CTRs, while entertainment sites may have lower rates.",
      },
    },
    {
      "@type": "Question",
      name: "How can I increase my CPC (Cost Per Click)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To increase CPC, focus on high-value niches like finance, insurance, legal, or health. Target audiences from tier-1 countries (US, UK, Canada, Australia), create content around commercial-intent keywords, and ensure your site loads quickly.",
      },
    },
  ],
}

export const howToSchema = {
  name: "How to Calculate AdSense Revenue",
  description: "Learn how to calculate your Google AdSense earnings using page views, CTR, and CPC",
  step: [
    {
      "@type": "HowToStep",
      name: "Input Your Data",
      text: "Enter your daily page views, expected CTR, and estimated CPC into the calculator",
    },
    {
      "@type": "HowToStep",
      name: "Calculate Daily Clicks",
      text: "Daily Clicks = Page Views × (CTR ÷ 100)",
    },
    {
      "@type": "HowToStep",
      name: "Calculate Daily Revenue",
      text: "Daily Revenue = Daily Clicks × CPC",
    },
    {
      "@type": "HowToStep",
      name: "Project Monthly & Yearly",
      text: "Multiply daily revenue by 30 (monthly) and 365 (yearly)",
    },
  ],
}
