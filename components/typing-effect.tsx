"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export function TypingEffect({ text, speed = 50, delay = 0, className = "" }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    let typingInterval: NodeJS.Timeout | null = null

    if (isTyping && currentIndex < text.length) {
      typingInterval = setInterval(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    }

    return () => {
      if (typingInterval) clearInterval(typingInterval)
    }
  }, [isTyping, currentIndex, text, speed])

  return <span className={className}>{displayText}</span>
}

