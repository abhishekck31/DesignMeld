"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface QuoteFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteForm({ open, onOpenChange }: QuoteFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    requirements: "",
    budget: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration
      const serviceId = "YOUR_EMAILJS_SERVICE_ID"
      const templateId = "YOUR_EMAILJS_TEMPLATE_ID"
      const publicKey = "YOUR_EMAILJS_PUBLIC_KEY"

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        website: formData.website,
        requirements: formData.requirements,
        budget: formData.budget,
      }

      // Use a more direct approach to import and send
      const emailjs = await import("@emailjs/browser")
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      toast({
        title: "Quote request submitted!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        requirements: "",
        budget: "",
      })

      // Close dialog
      onOpenChange(false)
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] border border-primary/20 shadow-brand">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-gradient">Get a Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below to request a quote for your project. We'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-primary/20 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-primary/20 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="border-primary/20 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Current Website (optional)</Label>
              <Input
                id="website"
                name="website"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={handleChange}
                className="border-primary/20 focus-visible:ring-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="requirements">Project Requirements</Label>
            <Textarea
              id="requirements"
              name="requirements"
              placeholder="Tell us about your project and what you're looking for..."
              value={formData.requirements}
              onChange={handleChange}
              required
              className="min-h-[120px] border-primary/20 focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range (optional)</Label>
            <Input
              id="budget"
              name="budget"
              placeholder="Your budget range"
              value={formData.budget}
              onChange={handleChange}
              className="border-primary/20 focus-visible:ring-primary"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting} className="bg-brand-gradient hover:opacity-90 shadow-brand">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

