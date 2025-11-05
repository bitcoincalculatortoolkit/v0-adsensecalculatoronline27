"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  const elements = [
    { size: 300, x: "10%", y: "20%", duration: 20 },
    { size: 200, x: "80%", y: "60%", duration: 25 },
    { size: 250, x: "60%", y: "10%", duration: 22 },
    { size: 180, x: "20%", y: "70%", duration: 18 },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-30">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
