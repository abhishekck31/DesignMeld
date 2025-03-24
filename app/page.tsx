"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"
import { Toaster } from "@/components/ui/toaster"
import { Navigation } from "@/components/navigation"
import { SparklingCursor } from "@/components/sparkling-cursor"
import { ContactForm } from "@/components/contact-form"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { TypingEffect } from "@/components/typing-effect"
import { GlowText } from "@/components/glow-text"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Code } from "lucide-react"

export default function Home() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <SparklingCursor />
      <Toaster />
      <QuoteForm open={quoteFormOpen} onOpenChange={setQuoteFormOpen} />
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />

      <Navigation onQuoteClick={() => setQuoteFormOpen(true)} onContactClick={() => setContactFormOpen(true)} />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background via-background to-background/80 relative overflow-hidden">
          {/* Neon glow effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <GlowText className="text-brand-gradient">
                      <TypingEffect text="Blending Creativity with Code" speed={70} />
                    </GlowText>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We craft digital experiences that captivate, engage, and convert. Your vision, our expertise.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    onClick={() => setQuoteFormOpen(true)}
                    className="group relative overflow-hidden rounded-lg px-4 py-2 transition-all duration-300 ease-out hover:opacity-90 border border-primary/50 bg-brand-gradient shadow-brand"
                  >
                    <span className="relative z-10">Get a Quote</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden rounded-lg border border-primary/20 bg-background px-4 py-2 transition-all duration-300 ease-out hover:border-primary/30 hover:bg-primary/10 hover:shadow-brand"
                    onClick={() => {
                      const servicesSection = document.querySelector("#services")
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <span className="relative z-10">Explore Services</span>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative h-full w-full overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 shadow-brand">
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                  <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
                    <div className="flex h-full flex-col items-center justify-center space-y-4">
                      <div className="h-20 w-20 rounded-full bg-brand-gradient p-4 shadow-brand">
                        <Code className="h-full w-full text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold">Web Development</h3>
                        <p className="text-sm text-muted-foreground">
                          We build modern, responsive websites that look great on any device.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection />
        <ServicesSection />

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/90 to-background/80 relative overflow-hidden"
        >
          {/* Neon glow effects */}
          <div className="absolute top-1/3 -left-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />

          <div className="container px-4 md:px-6 relative z-10">
            <GlowText className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center text-brand-gradient">
              About DesignMeld
            </GlowText>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 shadow-brand">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-background">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/code-LeBATJN3sVmTOsg8z4JSk0YPvRIWHU.png"
                    alt="DesignMeld Logo"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">We Are Students With Big Dreams</h3>
                <p className="text-muted-foreground">
                  As a team of passionate B.Tech students, we're on a journey to turn our education into real-world
                  impact. DesignMeld was born in our college dorm rooms and labs, where we discovered our shared love
                  for creating beautiful, functional websites.
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">We need your support!</span> By choosing to work with us,
                  you're not just getting a website – you're investing in the next generation of tech talent. Your
                  project helps us build our portfolios, gain valuable experience, and fund our education.
                </p>
                <div className="p-4 border border-primary/20 rounded-lg bg-primary/5 shadow-brand mt-4">
                  <h4 className="font-bold text-lg mb-2">Why Choose Student Developers?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Fresh, innovative ideas and up-to-date with the latest technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Affordable rates that respect your budget while valuing our work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Dedication and enthusiasm that exceeds expectations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Your feedback directly shapes our growth as professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection onContactClick={() => setContactFormOpen(true)} />
      </main>

      <EnhancedFooter />
    </div>
  )
}

