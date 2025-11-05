"use client"

import { ScrollReveal } from "./animations/scroll-reveal"
import { CounterAnimation } from "./animations/counter-animation"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: 50000, suffix: "+", label: "Active Users" },
  { value: 1000000, suffix: "+", label: "Calculations Made", prefix: "$" },
  { value: 99.9, suffix: "%", label: "Accuracy Rate", decimals: 1 },
  { value: 24, suffix: "/7", label: "Available" },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">
              Trusted by Content Creators{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Worldwide</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-2 text-4xl font-bold text-foreground lg:text-5xl">
                    {isInView && (
                      <CounterAnimation
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                        duration={2}
                      />
                    )}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
