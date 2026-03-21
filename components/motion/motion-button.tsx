"use client"

import * as React from "react"
import { AnimatePresence, motion, useReducedMotion, type MotionProps } from "framer-motion"
import type { VariantProps } from "class-variance-authority"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Ripple = { id: number; x: number; y: number; size: number }

function useRipples() {
  const reduceMotion = useReducedMotion()
  const [ripples, setRipples] = React.useState<Ripple[]>([])

  const addRipple = React.useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (reduceMotion) return
      const target = event.currentTarget
      const rect = target.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const size = Math.max(rect.width, rect.height) * 1.25
      const id = Date.now() + Math.floor(Math.random() * 10_000)

      setRipples((prev) => [...prev, { id, x, y, size }])
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 700)
    },
    [reduceMotion]
  )

  return { ripples, addRipple }
}

export function MotionButton({
  className,
  variant,
  size,
  children,
  onPointerDown,
  ...props
}: React.ComponentProps<typeof motion.button> &
  VariantProps<typeof buttonVariants> &
  MotionProps) {
  const reduceMotion = useReducedMotion()
  const { ripples, addRipple } = useRipples()

  return (
    <motion.button
      className={cn(
        buttonVariants({ variant, size }),
        "btn-premium relative overflow-hidden",
        className
      )}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      onPointerDown={(e) => {
        addRipple(e as any)
        onPointerDown?.(e)
      }}
      {...props}
    >
      {children}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/35"
            style={{
              width: r.size,
              height: r.size,
              left: r.x - r.size / 2,
              top: r.y - r.size / 2,
            }}
            initial={{ opacity: 0.35, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  )
}
