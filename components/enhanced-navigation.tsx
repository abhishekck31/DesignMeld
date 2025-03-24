"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Code, Sparkles } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavigationItem {
  name: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

interface EnhancedNavigationProps {
  onQuoteClick: () => void
  onContactClick: () => void
}

export function EnhancedNavigation({ onQuoteClick, onContactClick }: EnhancedNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "border-transparent bg-background/0"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            <Code className="h-4 w-4 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            DesignMeld
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onContactClick}
            className="border-primary/30 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)]"
          >
            Contact Us
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onQuoteClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)]"
            >
              <span className="sr-only">Toggle menu</span>
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-primary/20 bg-background/95 backdrop-blur">
            <div className="flex flex-col gap-6 mt-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href)
                    document.querySelector("[data-radix-collection-item]")?.click()
                  }}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="outline"
                onClick={() => {
                  onContactClick()
                  document.querySelector("[data-radix-collection-item]")?.click()
                }}
                className="mt-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
              >
                Contact Us
              </Button>
              <Button
                variant="default"
                onClick={() => {
                  onQuoteClick()
                  document.querySelector("[data-radix-collection-item]")?.click()
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

