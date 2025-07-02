/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['next-intl'],
  },
  
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [
      'localhost',
      'nexus-platform.vercel.app',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
  
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  
  env: {
    NEXT_PUBLIC_APP_NAME: 'Nexus Platform',
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
  },
};

module.exports = nextConfig;