"use client"

import { ScrollReveal } from "./animations/scroll-reveal"
import { Card } from "./ui/card"
import { TrendingUp, Target, Zap, Shield, BarChart as BarChart3, Sparkles } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Track your AdSense performance with live data visualization and instant insights.",
  },
  {
    icon: Target,
    title: "Niche Optimization",
    description: "Industry-specific multipliers to accurately predict earnings for your content niche.",
  },
  {
    icon: Zap,
    title: "Instant Calculations",
    description: "Lightning-fast calculations with interactive sliders and real-time updates.",
  },
  {
    icon: Shield,
    title: "Data Privacy",
    description: "Your calculations are private and secure. We never store your sensitive data.",
  },
  {
    icon: BarChart3,
    title: "Advanced Metrics",
    description: "Deep dive into RPM, eCPM, CTR, and geographic performance indicators.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Get personalized recommendations to maximize your AdSense revenue potential.",
  },
]

export function PremiumFeaturesSection() {
  return (
    <section className="relative py-32">
      <div className="container">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">
              Premium Features for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Maximum Revenue
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Everything you need to optimize your AdSense earnings and make data-driven decisions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="group relative overflow-hidden border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-pretty text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
