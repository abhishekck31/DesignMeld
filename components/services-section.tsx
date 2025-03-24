import type React from "react"
import { Code, Compass, MessageSquare, Palette, Smartphone, Globe } from "lucide-react"
import { GlowText } from "@/components/glow-text"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-brand shadow-brand-hover">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient transition-all duration-300 ease-out group-hover:opacity-90 shadow-brand">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Web Development",
      description:
        "Custom websites built with the latest technologies including React, Next.js, and modern frameworks.",
    },
    {
      icon: <Palette className="h-6 w-6 text-white" />,
      title: "UI/UX Design",
      description: "Intuitive interfaces that enhance user experience with beautiful, functional designs.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engines and drive more organic traffic.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Consultation",
      description: "Expert advice on your digital strategy and technology stack selection.",
    },
    {
      icon: <Compass className="h-6 w-6 text-white" />,
      title: "Custom Solutions",
      description: "Tailored development for your specific business needs and challenges.",
    },
  ]

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/90 to-background/80 relative overflow-hidden"
    >
      {/* Neon glow effects */}
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <GlowText className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-gradient">
            Our Services
          </GlowText>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a comprehensive range of web development and design services to help your business succeed online.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

