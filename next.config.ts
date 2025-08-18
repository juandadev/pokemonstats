import type { NextConfig } from 'next';
import { withBotId } from 'botid/next/config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'projectpokemon.org' },
      { protocol: 'https', hostname: 'i.ebayimg.com' },
      { protocol: 'https', hostname: 'assets.pokemon.com' },
      { protocol: 'https', hostname: 'www.pokencyclopedia.info' },
      { protocol: 'https', hostname: 'serebii.net' },
      { protocol: 'https', hostname: 'archives.bulbagarden.net' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: '/app/totodile',
        permanent: true,
      },
    ];
  },
};

export default withBotId(nextConfig);
