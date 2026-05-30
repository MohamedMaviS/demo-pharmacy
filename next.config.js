/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nourpharmacies.com',
        pathname: '/cdn/shop/**',
      },
    ],
  },
};

module.exports = nextConfig;
