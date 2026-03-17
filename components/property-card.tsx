"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export interface Property {
  id: string
  title: string
  location: string
  price: number
  image: string
  bedrooms: number
  bathrooms: number
  area: number
  type: string
  featured?: boolean
}

interface PropertyCardProps {
  property: Property
  index?: number
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <Card 
      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {property.featured && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg animate-pulse">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </span>
        )}
        <span className="absolute top-4 right-4 bg-foreground/90 backdrop-blur-sm text-background text-xs font-medium px-3 py-1.5 rounded-full capitalize shadow-lg">
          {property.type}
        </span>
      </div>
      
      <CardContent className="p-5 lg:p-6">
        <h3 className="font-serif font-semibold text-lg lg:text-xl text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {property.title}
        </h3>
      </CardContent>
    </Card>
  )
}
