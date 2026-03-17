"use client"

export function AspireDevBadge() {
  // Keep this dev-only: it replaces the Next.js dev indicator badge.
  if (process.env.NODE_ENV !== "development") return null

  return (
    <div className="fixed bottom-4 left-4 z-[9999] select-none pointer-events-none">
      <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-primary/80 via-[color:var(--gold-light)]/60 to-primary/30 p-[1px] shadow-2xl motion-safe:animate-float">
        <div className="relative h-full w-full rounded-full bg-foreground/95 text-background overflow-hidden grid place-items-center ring-1 ring-background/10">
          {/* Soft olive glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(var(--primary),0.42),transparent_55%)]" />
          {/* Specular highlight */}
          <div className="absolute -top-2 -left-2 h-8 w-8 rounded-full bg-background/15 blur-md" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-background/25 to-transparent" />

          <span className="relative font-serif text-lg font-bold tracking-[0.08em]">
            A
          </span>
          <span className="absolute bottom-2 h-[2px] w-5 rounded-full bg-primary/80" />
        </div>
      </div>
    </div>
  )
}
