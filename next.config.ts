import type { NextConfig } from "next";

// For GitHub Pages project site only (e.g. user.github.io/my-portfolio):
// set NEXT_PUBLIC_BASE_PATH=/my-portfolio (use repo name, NOT /en or /ar)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath && { basePath }),
  images: {
    unoptimized: true, // Required for static export (e.g. GitHub Pages)
    remotePatterns: [],
  },
};

export default nextConfig;
