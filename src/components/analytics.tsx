"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Google Analytics tracking
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const gaId = typeof window !== "undefined" ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID : undefined

  useEffect(() => {
    if (gaId && typeof window !== "undefined" && window.gtag) {
      window.gtag("config", gaId, {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams, gaId])

  return null
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

export const trackCalculation = (
  pageViews: string,
  ctr: string,
  cpc: string,
  results: {
    dailyEarnings?: number
    monthlyEarnings?: number
    yearlyEarnings?: number
  },
) => {
  trackEvent("adsense_calculation", {
    page_views: pageViews,
    ctr: ctr,
    cpc: cpc,
    daily_earnings: results?.dailyEarnings || 0,
    monthly_earnings: results?.monthlyEarnings || 0,
    yearly_earnings: results?.yearlyEarnings || 0,
  })
}

export const trackPageView = (pageName: string) => {
  trackEvent("page_view", {
    page_name: pageName,
  })
}
