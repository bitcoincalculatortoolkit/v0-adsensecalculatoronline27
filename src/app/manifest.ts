import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AdsenseCalculator.online - AdSense Revenue Calculator",
    short_name: "AdsenseCalc",
    description:
      "Calculate your Google AdSense earnings potential with our professional revenue calculator and analytics tools",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    icons: [],
  }
}
