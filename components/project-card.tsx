"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl?: string
}

export function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-brand shadow-brand-hover">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-background">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {projectUrl && (
            <Button
              variant="outline"
              size="sm"
              className="group/btn border-primary/20 hover:border-primary/40 hover:bg-primary/5"
              onClick={() => window.open(projectUrl, "_blank")}
            >
              <span>View Project</span>
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

