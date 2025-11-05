import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 0,
      },
    ],
    sitemap: "https://adsensecalculator.online/sitemap.xml",
    host: "https://adsensecalculator.online",
  }
}
