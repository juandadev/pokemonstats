import React from 'react';
import Image from 'next/image';
import { Spinner } from 'react-bootstrap';
import s from './PokemonCar.module.scss';

export default function EvolutionImage({
  name,
  evolution,
  setPath,
  setPokemon,
  fetchPokemonData,
  setToggle,
}) {
  const handleClick = () => {
    fetchPokemonData(
      evolution,
      setPokemon,
      setPath,
    );
    setToggle([true, true]);
  };

  return (
    <div
      className={s.evolution_container}
      onClick={handleClick}
    >
      {evolution === name ? (
        <Spinner
          animation="grow"
          size="sm"
          variant="primary"
          className={s.spinner}
        />
      ) : (
        <Image
          className={s.evolutions}
          src={`https://projectpokemon.org/images/normal-sprite/${evolution}.gif`}
          width={80}
          height={80}
        />
      )}
      <p className={s.evolution_name}>{evolution}</p>
    </div>
  );
}
