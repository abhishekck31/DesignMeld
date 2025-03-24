"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GlowTextProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowText({ children, className, glowColor = "rgba(157, 123, 255, 0.7)" }: GlowTextProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={textRef}
      className={cn("transition-all duration-1000", isVisible ? "opacity-100" : "opacity-0", className)}
      style={{
        textShadow: isVisible ? `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}` : "none",
      }}
    >
      {children}
    </div>
  )
}

