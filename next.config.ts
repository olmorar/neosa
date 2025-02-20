import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // TODO: Remove "dangerouslyAllowSVG
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  experimental: {
    ppr: 'incremental',
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
};

export default nextConfig;
