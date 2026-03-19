"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, Building2, Info, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/properties", label: "Properties", icon: Building2 },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    // Ensure correct initial state (otherwise header styles won't apply until the first scroll).
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10" 
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Aspire Groups logo"
                width={36}
                height={36}
                priority
                className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-primary transition-transform duration-300 "
              />
              {/* <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
            </div>
            <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
              Aspire Groups
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm lg:text-base font-medium text-foreground transition-all duration-300 rounded-full hover:bg-primary/10 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 gap-2 rounded-full px-6">
                  <Sparkles className="h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full text-foreground transition-all duration-300 hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <div className="bg-background/98 backdrop-blur-md rounded-2xl mt-2 p-4 shadow-xl border border-primary/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                )
              })}
              <div className="pt-3 mt-2 border-t border-border">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 gap-2 shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
