import type { NextConfig } from "next"
import path from "node:path"

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js")
const isDev = process.env.NODE_ENV !== "production"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  ...(isDev
    ? {
        turbopack: {
          rules: {
            "*.{jsx,tsx}": {
              loaders: [LOADER],
            },
          },
        },
      }
    : {}),
}

export default nextConfig
// Orchids restart: 1761924282584
