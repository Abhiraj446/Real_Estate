"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Property } from "./property-card"

interface PropertySliderProps {
  properties: Property[]
}

export function PropertySlider({ properties }: PropertySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % properties.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [properties.length, isTransitioning])

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  if (properties.length === 0) return null

  const currentProperty = properties[currentIndex]

  return (
    <div
      className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Luxury gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/20" />
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30 m-6 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/30 m-6 pointer-events-none hidden lg:block" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
        <div className="max-w-2xl animate-fade-in-up" key={currentIndex}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full shadow-lg">
              <Star className="h-3.5 w-3.5 fill-current" />
              Featured Property
            </span>
            <span className="bg-background/20 backdrop-blur-sm text-background text-sm px-3 py-1.5 rounded-full capitalize">
              {currentProperty.type}
            </span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-background mb-4 leading-tight">
            {currentProperty.title}
          </h2>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 lg:p-4 bg-background/10 hover:bg-background/30 backdrop-blur-md rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-background/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-background" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 lg:p-4 bg-background/10 hover:bg-background/30 backdrop-blur-md rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-background/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-background" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 right-6 sm:right-8 lg:right-12 flex gap-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-10 bg-primary shadow-lg"
                : "w-2 bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/10">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / properties.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
