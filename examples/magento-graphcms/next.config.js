/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: `${__dirname}/.env` })

const { withGraphCommerce } = require('@graphcommerce/next-config')
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 10,
    pagesBufferLength: 10,
  },
  experimental: {
    scrollRestoration: true,
  },
  optimizeFonts: false,
  swcMinify: true,
  images: {
    domains: (process.env.IMAGE_DOMAINS ?? '').split(',').map((s) => s.trim()),
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  i18n: {
    locales: Object.keys(JSON.parse(process.env.NEXT_PUBLIC_LOCALE_STORES)),
    defaultLocale: Object.keys(JSON.parse(process.env.NEXT_PUBLIC_LOCALE_STORES))[0],
  },
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withGraphCommerce(withPWA(nextConfig), __dirname)
