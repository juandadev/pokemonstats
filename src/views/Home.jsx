import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { Chart, PokemonCard, SearchBar } from '../components';
import s from './Home.module.scss';

export default function Home({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header className={s.header}>
        <Image src="/images/pokeball-sprite.png" width={61} height={62} />
        <h1 className="text-center">Welcome to Pokémon stats</h1>
      </header>
      <main>
        <Row>
          <p className="text-center">An useful tool for your pokémon adventures!</p>
        </Row>
        <Row>
          <Col xs={12} xl={5} className="d-flex flex-column justify-content-start align-items-center mb-3">
            <SearchBar />
            <PokemonCard />
          </Col>
          <Col xs={12} xl={7} className={s.chart_container}>
            <Chart />
          </Col>
        </Row>
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
