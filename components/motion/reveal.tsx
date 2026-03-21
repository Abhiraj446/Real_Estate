"use client"

import * as React from "react"
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

type RevealDirection = "up" | "down" | "left" | "right" | "scale"
type RevealMode = "inView" | "onLoad"

const easePremium: Transition["ease"] = [0.22, 1, 0.36, 1]

function getVariants(direction: RevealDirection): Variants {
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -18, y: 0, scale: 0.99, filter: "blur(8px)" },
        show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
      }
    case "right":
      return {
        hidden: { opacity: 0, x: 18, y: 0, scale: 0.99, filter: "blur(8px)" },
        show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
      }
    case "down":
      return {
        hidden: { opacity: 0, x: 0, y: -18, scale: 0.985, filter: "blur(10px)" },
        show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
      }
    case "scale":
      return {
        hidden: { opacity: 0, x: 0, y: 0, scale: 0.96, filter: "blur(12px)" },
        show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
      }
    case "up":
    default:
      return {
        hidden: { opacity: 0, x: 0, y: 18, scale: 0.985, filter: "blur(10px)" },
        show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
      }
  }
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.55,
  mode = "inView",
  once = true,
  amount = 0.25,
}: {
  children: React.ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
  duration?: number
  mode?: RevealMode
  once?: boolean
  amount?: number
}) {
  const reduceMotion = useReducedMotion()

  const variants = React.useMemo(() => getVariants(direction), [direction])
  const transition = React.useMemo<Transition>(
    () => ({
      duration: reduceMotion ? 0 : duration,
      ease: easePremium,
      delay: reduceMotion ? 0 : delay,
    }),
    [delay, duration, reduceMotion]
  )

  const motionProps =
    mode === "onLoad"
      ? { initial: "hidden" as const, animate: "show" as const }
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once, amount },
        }

  return (
    <motion.div
      className={cn("motion-safe:transform-gpu", className)}
      variants={variants}
      transition={transition}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
