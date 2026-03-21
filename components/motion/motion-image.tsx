"use client"

import * as React from "react"
import Image, { type ImageProps } from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

export function MotionImage({
  wrapperClassName,
  imageClassName,
  parallax = false,
  ...props
}: ImageProps & { parallax?: boolean; wrapperClassName?: string; imageClassName?: string }) {
  if (parallax) {
    return (
      <ParallaxMotionImage
        {...props}
        wrapperClassName={wrapperClassName}
        imageClassName={imageClassName}
      />
    )
  }

  return (
    <FadeMotionImage
      {...props}
      wrapperClassName={wrapperClassName}
      imageClassName={imageClassName}
    />
  )
}

function FadeMotionImage({
  wrapperClassName,
  imageClassName,
  ...props
}: ImageProps & { wrapperClassName?: string; imageClassName?: string }) {
  const reduceMotion = useReducedMotion()
  const [loaded, setLoaded] = React.useState(false)

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
      animate={reduceMotion ? undefined : { opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.02 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative", wrapperClassName)}
    >
      <Image
        {...props}
        className={cn(props.className, imageClassName)}
        onLoad={(e) => {
          props.onLoad?.(e)
          setLoaded(true)
        }}
      />
    </motion.div>
  )
}

function ParallaxMotionImage({
  wrapperClassName,
  imageClassName,
  ...props
}: ImageProps & { wrapperClassName?: string; imageClassName?: string }) {
  const reduceMotion = useReducedMotion()
  const [loaded, setLoaded] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-10, 10])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
      animate={reduceMotion ? undefined : { opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.02 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative", wrapperClassName)}
    >
      <Image
        {...props}
        className={cn(props.className, imageClassName)}
        onLoad={(e) => {
          props.onLoad?.(e)
          setLoaded(true)
        }}
      />
    </motion.div>
  )
}
