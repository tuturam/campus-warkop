import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No config needed for CDN links in layout
  images: {
    remotePatterns: [new URL('https://lh3.googleusercontent.com/aida-public/**')]
  }
};

export default nextConfig;
