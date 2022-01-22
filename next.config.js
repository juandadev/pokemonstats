const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'raw.githubusercontent.com',
      'projectpokemon.org',
      'i.ebayimg.com',
      'assets.pokemon.com',
    ],
  },
};
