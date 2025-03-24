"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function submitQuoteForm(formData: FormData) {
  // Validate form data
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  try {
    // In a real implementation, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or Resend

    // This is a simulation of sending an email
    console.log("Sending email with data:", formData)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Your quote request has been submitted successfully. We'll contact you soon!",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "There was an error submitting your request. Please try again.",
    }
  }
}

