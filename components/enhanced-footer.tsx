import Link from "next/link"
import { Linkedin, Instagram, Mail } from "lucide-react"

export function EnhancedFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8 relative overflow-hidden">
      {/* Neon glow effects */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-muted-foreground">© 2025 DesignMeld. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link
              href="mailto:contact.designmeld@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://www.instagram.com/design_meld?igsh=ZGIwaWVsaGpiNHQ="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/design-meld-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

