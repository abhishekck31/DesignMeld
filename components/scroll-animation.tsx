"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  animation?: "fadeIn" | "fadeUp" | "fadeRight" | "fadeLeft" | "scale" | "glow"
}

export function ScrollAnimation({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
  animation = "fadeUp",
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })

  const [hasAnimated, setHasAnimated] = useState(false)

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    glow: {
      hidden: { opacity: 0, boxShadow: "0 0 0 rgba(139, 92, 246, 0)" },
      visible: {
        opacity: 1,
        boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
        transition: {
          boxShadow: { delay: delay + duration, duration: 0.5 },
        },
      },
    },
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      if (once) {
        setHasAnimated(true)
      }
    } else if (!isInView && !once && hasAnimated) {
      controls.start("hidden")
      setHasAnimated(false)
    }
  }, [isInView, controls, once, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animation]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

