/** @type {import('next').NextConfig} */
import { fileURLToPath } from "node:url"

const turbopackRoot = fileURLToPath(new URL(".", import.meta.url))

const nextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
  // Disable Next.js dev indicator (the floating "N" badge).
  // We'll show our own Aspire badge instead.
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
