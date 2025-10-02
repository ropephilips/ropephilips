import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   turbo: false;
  // }
  eslint:{
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
