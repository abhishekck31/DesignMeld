"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlowText } from "@/components/glow-text"

interface ContactSectionProps {
  onContactClick: () => void
}

export function ContactSection({ onContactClick }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background/80 via-background to-background relative overflow-hidden"
    >
      {/* Neon glow effects */}
      <div className="absolute bottom-1/3 -left-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <GlowText className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-gradient">
            Get in Touch
          </GlowText>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to start your next project? Contact us today.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient shadow-brand">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">WhatsApp</h4>
                <p className="text-muted-foreground">+91 6361067517</p>
                <a
                  href="https://wa.me/916361067517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-block mt-1"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient shadow-brand">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <p className="text-muted-foreground">contact.designmeld@gmail.com</p>
                <a
                  href="mailto:contact.designmeld@gmail.com"
                  className="text-sm text-primary hover:underline inline-block mt-1"
                >
                  Send us an email
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient shadow-brand">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Location</h4>
                <p className="text-muted-foreground">
                  Bengaluru,Karnataka,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 shadow-brand">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
              <h3 className="text-xl font-bold mb-4">Send us a message</h3>
              <p className="text-muted-foreground mb-6">
                Fill out our contact form and we'll get back to you as soon as possible.
              </p>
              <Button onClick={onContactClick} className="w-full bg-brand-gradient hover:opacity-90 shadow-brand">
                Open Contact Form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

