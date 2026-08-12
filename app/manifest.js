export default function manifest() {
  return {
    name: 'CompostHeaven - Composting Guides & Reviews',
    short_name: 'CompostHeaven',
    description:
      'Your trusted guide to composting and vermicomposting. Honest reviews, in-depth guides, and practical tips to turn kitchen scraps into black gold.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfcf7',
    theme_color: '#1f3d2b',
    icons: [
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
