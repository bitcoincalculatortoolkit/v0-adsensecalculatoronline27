"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Menu, X, Sparkles, User, Settings, LayoutDashboard } from "lucide-react"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { motion, AnimatePresence } from "framer-motion"

export function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-4 h-4 text-secondary" />
              </motion.div>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading text-foreground">AdSense Calculator</h1>
              <Badge variant="secondary" className="text-xs px-2 py-0 font-display">
                PRO
              </Badge>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Calculator" },
              { href: "/dashboard", label: "Dashboard" },
              { href: "/how-it-works", label: "How It Works" },
              { href: "/optimization-tips", label: "Optimization" },
              { href: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-display text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <MagneticButton className="hidden sm:flex">
              <Button variant="ghost" size="sm" className="font-display hover:bg-primary/10">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
            </MagneticButton>

            <MagneticButton className="hidden sm:flex">
              <Button
                size="sm"
                className="font-display bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-200"
              >
                <Settings className="w-4 h-4 mr-2" />
                Customize
              </Button>
            </MagneticButton>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden glass-effect border-t border-border/50 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-sm font-display text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Calculator
                </Link>
                <Link
                  href="/dashboard"
                  className="text-sm font-display text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LayoutDashboard className="w-4 h-4 mr-2 inline" />
                  Dashboard
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-sm font-display text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/optimization-tips"
                  className="text-sm font-display text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Optimization
                </Link>
                <Link
                  href="/faq"
                  className="text-sm font-display text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm" className="justify-start font-display">
                    <User className="w-4 h-4 mr-2" />
                    Account
                  </Button>
                  <Button size="sm" className="justify-start font-display bg-gradient-to-r from-primary to-secondary">
                    <Settings className="w-4 h-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
