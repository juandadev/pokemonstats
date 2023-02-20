import React from 'react';
import Image from 'next/image';
import { Spinner } from 'react-bootstrap';
import s from './EvolutionImage.module.scss';
import { EVOLUTION_DETAILS } from '../../common/constants';

export default function EvolutionImage({
  name,
  evolution,
  details,
  setPath,
  setPokemon,
  fetchPokemonData,
  setToggle,
}) {
  const handleClick = () => {
    fetchPokemonData(evolution, setPokemon, setPath);
    setToggle([true, true]);
  };

  const displayEvolutionDetails = () => {
    if (Object.keys(details) !== 0) {
      const key = Object.keys(details)[0];
      const value = Object.values(details)[0];
      let additionalRules = '';

      if (key === 'min_level') {
        const statsRule = Object.entries(details).filter(
          ([key]) => key === 'relative_physical_stats'
        );

        if (statsRule.length !== 0) {
          additionalRules = ` when ${EVOLUTION_DETAILS.stats[statsRule[0][1].toString()]}`;
        }
      }

      switch (key) {
        case 'item':
          return EVOLUTION_DETAILS.item[details.item.name];

        case 'min_happiness':
          return `${EVOLUTION_DETAILS[key]}${
            details['time_of_day'] !== ''
              ? ` during ${details['time_of_day']}`
              : ''
          }`;

        case 'location':
          return value.name === 'eterna-forest' ? 'Leaf stone' : 'Ice stone';

        case 'known_move_type':
          return `Knows a ${value.name}-type move when lvl up`;

        case 'known_move':
          return `Knows ${value.name} move when lvl up`;

        case 'min_level':
          return `Lvl ${value}${additionalRules}`;

        case 'held_item':
          return `Holding ${EVOLUTION_DETAILS.item[value.name]} while trading`;

        case 'needs_overworld_rain':
          return 'Trading';
      }
    }
  };

  return (
    <div className={s.evolution_container} onClick={handleClick}>
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
      <p className={s.evolution_details}>{displayEvolutionDetails()}</p>
    </div>
  );
}
