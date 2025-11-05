"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

interface CounterAnimationProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function CounterAnimation({
  value,
  duration = 1,
  prefix = "",
  suffix = "",
  decimals = 0,
}: CounterAnimationProps) {
  const spring = useSpring(0, { duration: duration * 1000 })
  const display = useTransform(spring, (current) => `${prefix}${current.toFixed(decimals)}${suffix}`)

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return <motion.span>{display}</motion.span>
}
