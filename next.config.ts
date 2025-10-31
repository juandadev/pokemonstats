import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'bulbapedia.bulbagarden.net' },
      { protocol: 'https', hostname: 'projectpokemon.org' },
      { protocol: 'https', hostname: 'i.ebayimg.com' },
      { protocol: 'https', hostname: 'assets.pokemon.com' },
      { protocol: 'https', hostname: 'www.pokencyclopedia.info' },
      { protocol: 'https', hostname: 'www.serebii.net' },
      { protocol: 'https', hostname: 'archives.bulbagarden.net' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/gengar',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
