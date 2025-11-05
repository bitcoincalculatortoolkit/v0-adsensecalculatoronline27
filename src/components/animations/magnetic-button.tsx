"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { type ReactNode, useRef, type MouseEvent } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ children, className = "", strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}
