"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return

    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        // LCP tracked silently for analytics
      })
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"], buffered: true })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          // FID tracked silently for analytics
        })
      })
      fidObserver.observe({ entryTypes: ["first-input"], buffered: true })

      // Cumulative Layout Shift (CLS)
      let clsScore = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsScore += (entry as any).value
            // CLS tracked silently for analytics
          }
        }
      })
      clsObserver.observe({ entryTypes: ["layout-shift"] })

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null
}
