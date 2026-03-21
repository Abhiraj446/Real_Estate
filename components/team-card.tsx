"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/reveal"
import { MotionImage } from "@/components/motion/motion-image"

export function TeamCard({
  name,
  role,
  image,
  index = 0,
  className,
}: {
  name: string
  role: string
  image: string
  index?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <Reveal delay={index * 0.08} className={cn("w-full", className)}>
      <motion.div
        className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/60 card-premium"
        whileHover={
          reduceMotion
            ? undefined
            : { y: -6, scale: 1.015, boxShadow: "0 24px 60px rgba(0,0,0,0.18)" }
        }
        whileTap={reduceMotion ? undefined : { scale: 0.99 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-square overflow-hidden group">
          <MotionImage
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 92vw, 360px"
            wrapperClassName="absolute inset-0"
            imageClassName="object-cover img-premium"
            parallax
            priority={false}
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-5 text-center">
          <h3 className="font-serif font-semibold text-lg text-foreground transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </motion.div>
    </Reveal>
  )
}
