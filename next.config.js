/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'http://aguavivaribeiraopires.com.br/acampa2023/' : undefined,
  trailingSlash: true
}

module.exports = nextConfig
