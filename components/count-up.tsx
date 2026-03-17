"use client"

import { useEffect, useMemo, useRef, useState } from "react"

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function parseNumericWithSuffix(input: string) {
  const trimmed = input.trim()
  const match = trimmed.match(/^(-?\d+(?:\.\d+)?)(.*)$/)
  if (!match) return null

  const numericPart = match[1]
  const suffix = match[2] ?? ""
  const target = Number(numericPart)
  if (!Number.isFinite(target)) return null

  const decimals = numericPart.includes(".") ? (numericPart.split(".")[1]?.length ?? 0) : 0
  return { target, suffix, decimals }
}

export function CountUp({
  value,
  durationMs = 1200,
  className,
}: {
  value: number | string
  durationMs?: number
  className?: string
}) {
  const text = typeof value === "number" ? String(value) : value
  const parsed = useMemo(() => parseNumericWithSuffix(text), [text])

  const ref = useRef<HTMLSpanElement | null>(null)
  const [current, setCurrent] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!parsed) return
    const el = ref.current
    if (!el) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) {
      setCurrent(parsed.target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return
        if (hasAnimated.current) return
        hasAnimated.current = true

        const startValue = 0
        const endValue = parsed.target
        const startTime = performance.now()

        const step = (now: number) => {
          const elapsed = now - startTime
          const t = Math.min(1, elapsed / durationMs)
          const eased = easeOutCubic(t)
          setCurrent(startValue + (endValue - startValue) * eased)
          if (t < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
        observer.disconnect()
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [parsed, durationMs])

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    )
  }

  const formatted = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: parsed.decimals,
    minimumFractionDigits: parsed.decimals,
  }).format(current)

  return (
    <span ref={ref} className={className}>
      {formatted}
      {parsed.suffix}
    </span>
  )
}

