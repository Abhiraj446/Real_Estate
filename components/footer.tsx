"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Building2, Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const propertyTypes = [
  { href: "/properties?type=house", label: "Houses" },
  { href: "/properties?type=apartment", label: "Apartments" },
  { href: "/properties?type=villa", label: "Villas" },
  { href: "/properties?type=commercial", label: "Commercial" },
]

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
]

export function Footer() {
  const pathname = usePathname()
  const hideNewsletter = pathname?.startsWith("/properties") || pathname?.startsWith("/about")

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      {/* Newsletter section */}
      {!hideNewsletter && (
        <div className="border-b border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-2 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Stay Updated
              </h3>
              <p className="text-background/70">Get the latest luxury property listings delivered to your inbox</p>
            </div>
            
          </div>
        </div>
      </div>
      )}

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Aspire Groups logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 text-primary transition-transform duration-300 group-hover:scale-110"
                />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-serif text-2xl font-bold group-hover:text-primary transition-colors duration-300">Aspire Groups</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted partner in finding the perfect property. We bring you premium real estate listings with exceptional service and luxury experiences.
            </p>
            
            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-6">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-300 text-sm group">
                <div className="p-2 bg-background/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                +91 8427966111
              </a>
              <a href="mailto:info@aspiregroups.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-300 text-sm group">
                <div className="p-2 bg-background/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                info@aspiregroups.com
              </a>
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <div className="p-2 bg-background/10 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                Mews Gate, Kurali Road, Kharar
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Property Types
            </h3>
            <ul className="flex flex-col gap-3">
              {propertyTypes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Connect With Us
            </h3>
            {/* <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-background/10 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon className="h-5 w-5 group-hover:text-primary-foreground transition-colors duration-300" />
                  </a>
                )
              })}
            </div> */}
            <div className="flex flex-col gap-3">
              <a
                      href="https://wa.me/8427966111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-3 sm:py-4 md:py-5">
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
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-6">
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
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-6">
                        <MessageCircle className="h-5 w-5" />
                        Contact - Imran
                      </Button>
                    </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Aspire Groups. All rights reserved. Crafted with excellence.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/60 hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/60 hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
