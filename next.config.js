/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './image/loader.ts',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
