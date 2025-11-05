"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function PremiumCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border-2 border-primary mix-blend-difference lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-primary mix-blend-difference lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: 12,
          translateY: 12,
        }}
      />
    </>
  )
}
