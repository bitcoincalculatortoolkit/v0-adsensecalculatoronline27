"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, TrendingUp, Calculator } from "lucide-react"
import { motion } from "framer-motion"
import { MagneticButton } from "@/components/animations/magnetic-button"

export function LuxuryHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(22,78,99,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-lg"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="glass-effect px-6 py-2 text-sm font-display border-0 animate-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium AdSense Revenue Calculator
            </Badge>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading text-balance leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Calculate Your
              <motion.span
                className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                AdSense Revenue
              </motion.span>
              <motion.span
                className="block text-4xl md:text-5xl lg:text-6xl text-muted-foreground font-display"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Like a Professional
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Experience the most sophisticated AdSense calculator with real-time analytics, personalized insights, and
              premium design. Trusted by professional content creators worldwide.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MagneticButton>
              <Button size="lg" className="px-8 py-4 text-lg font-display gradient-border animate-glow">
                <Calculator className="w-5 h-5 mr-2" />
                Start Calculating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-display glass-effect hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Analytics
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="pt-12 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-sm text-muted-foreground font-body">Trusted by 50,000+ professional content creators</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground font-body">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                Real-time Calculations
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="w-2 h-2 bg-secondary rounded-full" />
                Advanced Analytics
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
                Premium Experience
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
