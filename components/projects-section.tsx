import { ProjectCard } from "@/components/project-card"
import { GlowText } from "@/components/glow-text"

export function ProjectsSection() {
  const projects = [
    {
      title: "Mayuriarts",
      description:
        "A portfolio website for a professional artist showcasing their artwork, exhibitions, and contact information.",
      imageUrl: "/mayuriarts.png?height=400&width=600",
      projectUrl: "https://mayuriarts.vercel.app/",
    },
    {
      title: "Suyof Infra Solutions",
      description:
        "Corporate website for an infrastructure company featuring their services, projects, and client testimonials.",
      imageUrl: "/suyoginfra.png?height=400&width=600",
      projectUrl: "https://suyoginfrasolutions.vercel.app/",
    },
    {
      title: "CampusNavigator",
      description:
        "An interactive campus guide application helping students navigate university facilities and resources.",
      imageUrl: "/campusnavigator.png?height=400&width=600",
      projectUrl: "https://campus--navigator.vercel.app/",
    },
  ]

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/80 to-background relative overflow-hidden"
    >
      {/* Neon glow effects */}
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <GlowText className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-gradient">
            Our Projects
          </GlowText>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of our recent work
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

