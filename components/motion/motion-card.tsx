"use client"

import * as React from "react"
import { motion, useReducedMotion, type MotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

export function MotionCard({
  className,
  children,
  hoverLift = true,
  ...props
}: {
  className?: string
  children: React.ReactNode
  hoverLift?: boolean
} & MotionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("motion-safe:transform-gpu", className)}
      whileHover={
        !hoverLift || reduceMotion
          ? undefined
          : { y: -6, scale: 1.01, boxShadow: "0 26px 65px rgba(0,0,0,0.18)" }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

