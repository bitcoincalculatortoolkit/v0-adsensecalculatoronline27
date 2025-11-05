import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adsensecalculator.online"

  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/dashboard", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/optimization-tips", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  ]

  const sitemap: MetadataRoute.Sitemap = []
  const lastModified = new Date()

  pages.forEach((page) => {
    // English version
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          es: `${baseUrl}/es${page.path}`,
        },
      },
    })

    // Spanish version
    sitemap.push({
      url: `${baseUrl}/es${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          es: `${baseUrl}/es${page.path}`,
        },
      },
    })
  })

  return sitemap
}
