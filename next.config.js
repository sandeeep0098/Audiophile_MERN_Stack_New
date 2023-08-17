/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // vercel: {
  //   ignoreBuildErrors: true,
  // },
  images: {
    domains: ['cdn.dribbble.com'],
  },
};

module.exports = nextConfig;
