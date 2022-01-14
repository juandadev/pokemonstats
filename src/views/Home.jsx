import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import { Chart } from '../components';

export default function Home({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header>
        <Image src="/images/pokeball-sprite.png" width={61} height={62} />
        <h1>Welcome to Pokémon stats</h1>
      </header>
      <main>
        <p>An useful tool for your pokémon adventures!</p>
        <Chart />
      </main>
      <footer>
        Made with 💚 by{' '}
        <a href="https://juanda.dev" target="_blank" rel="noreferrer">
          Juan Daniel Martínez
        </a>
      </footer>
    </>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
};

Home.defaultProps = {
  title: 'Pokémon Stats',
};
