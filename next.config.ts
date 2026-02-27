import type { NextConfig } from "next";

// For GitHub Pages project site (e.g. user.github.io/my-portfolio):
// set NEXT_PUBLIC_BASE_PATH=/my-portfolio
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(basePath && { basePath }),
  images: {
    unoptimized: true, // Required for static export (e.g. GitHub Pages)
    remotePatterns: [],
  },
};

export default nextConfig;
