/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async rewrites() {
    return [
      { source: '/compost.html', destination: '/compost' },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'compostheaven.com' }],
        destination: 'https://www.compostheaven.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
