import React from 'react';
import Image from 'next/legacy/image';
import { Badge, Col, Row } from 'react-bootstrap';
import { Chart, SearchBar } from '../components';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import s from './Home.module.scss';

export default function Home() {
  return (
    <>
      <header className={s.header}>
        <Image
          src="/images/pokeball-sprite.png"
          width={61}
          height={62}
          alt="Pokeball 8-bit style"
        />
        <h1 className="text-center">Welcome to Pokémon stats</h1>
      </header>
      <main>
        <Row>
          <p className="text-center">
            An useful tool for your pokémon adventures!
          </p>
        </Row>
        <Row>
          <Col
            xs={12}
            xl={5}
            className="d-flex flex-column justify-content-start align-items-center mb-3"
          >
            <SearchBar />
            <PokemonCard />
          </Col>
          <Col xs={12} xl={7} className={s.chart_container}>
            <Row className="d-flex justify-content-center mb-2">
              <div className="w-auto">
                <Badge bg="success">😁 2x Super effective</Badge>
              </div>
              <div className="w-auto">
                <Badge bg="light" className="text-dark">
                  🙂 1x Effective
                </Badge>
              </div>
              <div className="w-auto">
                <Badge bg="warning">😐 1/2x Not very effective</Badge>
              </div>
              <div className="w-auto">
                <Badge bg="dark">😶 0x No effect</Badge>
              </div>
            </Row>
            <Chart />
          </Col>
        </Row>
      </main>
      <footer className={s.footer}>
        Made with 💚 by{' '}
        <a href="https://juanda.dev" target="_blank" rel="noreferrer">
          Juan Daniel Martínez
        </a>
      </footer>
    </>
  );
}
