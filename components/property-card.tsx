"use client"

import { Star } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"
import { MotionImage } from "@/components/motion/motion-image"

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
  const reduceMotion = useReducedMotion()

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        whileHover={
          reduceMotion
            ? undefined
            : { y: -6, scale: 1.01, boxShadow: "0 26px 65px rgba(0,0,0,0.18)" }
        }
        whileTap={reduceMotion ? undefined : { scale: 0.99 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <Card className="group overflow-hidden border-0 shadow-lg bg-card card-premium py-0 gap-0">
          <div className="relative aspect-[4/3] overflow-hidden">
            <MotionImage
              src={property.image}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 92vw, 420px"
              wrapperClassName="absolute inset-0"
              imageClassName="object-cover img-premium group-hover:brightness-110"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {property.featured && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
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
      </motion.div>
    </Reveal>
  )
}
