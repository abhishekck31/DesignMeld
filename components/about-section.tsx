import { ScrollAnimation } from "@/components/scroll-animation"
import Image from "next/image"

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/90 to-background/80 relative overflow-hidden"
    >
      {/* Neon glow effects */}
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">About DesignMeld</h2>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 shadow-[0_0_25px_rgba(139,92,246,0.2)]">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-background">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="B.Tech Students Team" 
                width={600} 
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">We Are Students With Big Dreams</h3>
            <p className="text-muted-foreground">
              As a team of passionate B.Tech students, we're on a journey to turn our education into real-world impact. 
              DesignMeld was born in our college dorm rooms and labs, where we discovered our shared love for creating 
              beautiful, functional websites.
            </p>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">We need your support!</span> By choosing to work with us, 
              you're not just getting a website – you're investing in the next generation of tech talent. Your project 
              helps us build our portfolios, gain valuable experience, and fund our education.
            </p>
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5 shadow-[0_0_15px_rgba(139,92,246,0.2)] mt-4">
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
            <h3 className="text-2xl font-bold mt-6">Our Student Approach</h3>
            <p className="text-muted-foreground">
              We balance our academic commitments with professional dedication. We're transparent about our student status 
              while delivering work that competes with established agencies. Every project is a learning opportunity, and 
              we approach each challenge with enthusiasm, creativity, and a commitment to excellence.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p className="text-sm text-muted-foreground">
                As B.Tech students, our mission is to create impressive digital experiences while building our portfolio and skills. 
                We ask for your trust and support as we grow into industry professionals. Your project helps us learn and develop.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p className="text-sm text-muted-foreground">
                We envision growing from student developers into industry leaders. By working with clients who believe in nurturing talent, 
                we aim to build a portfolio of successful projects that showcase our abilities and help launch our careers in tech.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
              <h4 className="text-xl font-bold mb-2">Support Our Journey</h4>
              <p className="text-sm text-muted-foreground">
                Your project isn't just business for us—it's an investment in our future. We promise to pour our hearts into your 
                website, delivering quality work while growing our skills. Thank you for believing in student developers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

