import './src/env'

import type { NextConfig } from 'next'

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

void initOpenNextCloudflareForDev()

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
