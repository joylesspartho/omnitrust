import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static export-er jonno eta khubi dorkar
  allowedDevOrigins: ['10.205.144.145'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;