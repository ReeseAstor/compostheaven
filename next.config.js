/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/compost.html', destination: '/compost' },
    ];
  },
};

module.exports = nextConfig;
