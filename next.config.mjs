/** @type {import('next').NextConfig} */
const nextConfig = {
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
