import Image from "next/image"
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Us | Aspire Groups",
  description: "Get in touch with Aspire Groups. Contact our team for property inquiries, consultations, and real estate services.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["Mews Gate , Kurali Road", "Kharar , Punjab 140301"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 8427966111", "+91 8748003000", "+91 9858863362"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@aspiregroups.com", "sales@aspiregroups.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Header */}
        <section className="bg-foreground py-20 lg:py-32 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
              alt="Contact Aspire Groups"
              fill
              className="object-cover scale-105"
              priority
            />
          </div>

          {/* Olive luxury overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/90 to-foreground" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary),0.18),transparent_55%)]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "34px 34px",
            }}
          />
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float hidden lg:block" />
          <div className="absolute bottom-10 right-20 w-48 h-48 border border-primary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse hidden lg:block" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Get In Touch</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-background mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Contact Us
              </h1>
              <p className="text-background/70 text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Have questions about a property or need assistance? Our team is here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                  <MapPin className="h-4 w-4" />
                  Contact Information
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  Whether you are looking to buy, sell, or just have questions about the real estate market, 
                  our experienced team is ready to assist you. Reach out through any of the methods below.
                </p>

                <div className="grid gap-6 mb-10">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div 
                        key={item.title} 
                        className="flex gap-5 p-5 bg-muted rounded-2xl hover:bg-muted/80 transition-all duration-300 group animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* WhatsApp Buttons */}
                <div className="bg-muted p-6 lg:p-8 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      Quick Contact via WhatsApp
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    For immediate assistance, connect with our agents directly on WhatsApp.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/8427966111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-3 sm:py-4 md:py-5">
                        <MessageCircle className="h-5 w-5" />
                        Contact - Anil
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/8748003000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-3 sm:py-4 md:py-5">
                        <MessageCircle className="h-5 w-5" />
                        Contact - Satya
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/9858863362"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-3 sm:py-4 md:py-5">
                        <MessageCircle className="h-5 w-5" />
                        Contact - Imran
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                  <Sparkles className="h-4 w-4" />
                  Common Questions
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground text-lg">
                  Find answers to common questions about our services.
                </p>
              </div>
              
              <div className="grid gap-4">
                {[
                  {
                    question: "How do I schedule a property viewing?",
                    answer: "You can schedule a viewing by filling out the contact form above, calling our office, or reaching out via WhatsApp. Our agents typically respond within 24 hours.",
                  },
                  {
                    question: "What areas do you cover?",
                    answer: "We primarily serve the greater Los Angeles area, including Beverly Hills, Malibu, Santa Monica, and surrounding neighborhoods. Contact us for specific location inquiries.",
                  },
                  {
                    question: "Do you help with financing?",
                    answer: "Yes, we work with trusted mortgage partners and can help connect you with financing options that suit your needs and budget.",
                  },
                  {
                    question: "What documents do I need to buy a property?",
                    answer: "Typically, you will need proof of identity, proof of income, bank statements, and pre-approval from a lender. Our team will guide you through the complete documentation process.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-semibold text-lg text-foreground mb-3 flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {index + 1}
                      </span>
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-11">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
