import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_BACKEND_URL || "localhost",
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
