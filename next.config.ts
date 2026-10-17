import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  allowedDevOrigins: ['10.93.27.251'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;