"use client"

import { useState } from "react"
import { Send, CheckCircle, Loader2, Sparkles, User, Mail, Phone, IndianRupee, Home, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  fullName: string
  email: string
  phone: string
  iWantTo: string
  propertyType: string
  budgetRange: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    iWantTo: "",
    propertyType: "",
    budgetRange: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.success) {
        const errorFromValidation = Array.isArray(result?.errors) ? result.errors?.[0]?.msg : null
        const message = errorFromValidation || result?.message || "Failed to submit form. Please try again."
        setSubmitError(message)
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        iWantTo: "",
        propertyType: "",
        budgetRange: "",
        message: "",
      })

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      setIsSubmitting(false)
      setSubmitError("Could not reach the server. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 text-center shadow-xl animate-scale-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 animate-bounce">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground text-lg">
          Thank you for reaching out. Our team will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-3xl p-6 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-xl">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
          Send Us a Message
        </h3>
      </div>
      
      <div className="space-y-5">
        {/* Name Field */}
        <div className="group">
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-300">
              <User className="h-5 w-5" />
            </div>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="pl-12 h-12 bg-muted border-0 rounded-xl focus:ring-2 focus:ring-primary transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Email Field */}
        <div className="group">
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-300">
              <Mail className="h-5 w-5" />
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className="pl-12 h-12 bg-muted border-0 rounded-xl focus:ring-2 focus:ring-primary transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Phone Field */}
        <div className="group">
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-300">
              <Phone className="h-5 w-5" />
            </div>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="pl-12 h-12 bg-muted border-0 rounded-xl focus:ring-2 focus:ring-primary transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Inquiry Type Field */}
        <div className="group">
          <label htmlFor="iWantTo" className="block text-sm font-medium text-foreground mb-2">
            I Want To
          </label>
          <select
            id="iWantTo"
            name="iWantTo"
            value={formData.iWantTo}
            onChange={handleChange}
            required
            className="w-full h-12 px-4 bg-muted border-0 rounded-xl text-foreground outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            <option value="">Select an option</option>
            <option value="buy">Buy a Property</option>
            <option value="sell">Sell a Property</option>
            <option value="lease">Lease a Property</option>
            <option value="rent">Rent a Property</option>
          </select>
        </div>
        
        {/* Property Type Field */}
        <div className="group">
          <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-2">
            Type of Property
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              <Home className="h-5 w-5" />
            </div>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              className="w-full h-12 pl-12 pr-4 bg-muted border-0 rounded-xl text-foreground outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            >
              <option value="">Select property type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land/Plot</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        {/* Budget Field */}
        <div className="group">
          <label htmlFor="budgetRange" className="block text-sm font-medium text-foreground mb-2">
            Budget Range
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              <IndianRupee className="h-5 w-5" />
            </div>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              required
              className="w-full h-12 pl-12 pr-4 bg-muted border-0 rounded-xl text-foreground outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            >
              <option value="">Select your budget</option>
              <option value="under-100k">Under ₹1,00,000</option>
              <option value="100k-250k">₹1,00,000 - ₹5,00,000</option>
              <option value="250k-500k">₹5,00,000 - ₹10,00,000</option>
              <option value="500k-1m">₹10,00,000 - ₹25,00,000</option>
              <option value="1m-2m">₹25,00,000 - ₹50,00,000</option>
              <option value="above-2m">Above ₹50,00,000</option>
            </select>
          </div>
        </div>
        
        {/* Message Field */}
        <div className="group">
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Your Message
          </label>
          <div className="relative">
            <div className="absolute left-4 top-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300">
              <MessageSquare className="h-5 w-5" />
            </div>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about what you're looking for..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="pl-12 pt-4 bg-muted border-0 rounded-xl resize-none focus:ring-2 focus:ring-primary transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {submitError ? (
        <p className="mt-5 text-sm text-destructive" role="alert">
          {submitError}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-14 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
