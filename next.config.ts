import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 allowedDevOrigins: ['10.205.144.210'],
  

  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;