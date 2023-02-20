import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Spinner } from 'react-bootstrap';
import s from './EvolutionImage.module.scss';
import { EVOLUTION_DETAILS } from '../../common/constants';
import axios from 'axios';

// TODO: Get alolan, galar and other region forms in the evolution chain
// TODO: Keep researching Pokemons by alternate form (See ChatGPT for more reference)
// Investigate more exceptions for pokemons
// TODO: Consider adding png for held items
// https://www.serebii.net/itemdex/sprites/sv/crackedpot.png
// https://www.pokencyclopedia.info/sprites/items/items_3ds/i_3ds_unknown.png

export default function EvolutionImage({
  name,
  evolution,
  details,
  setPath,
  setPokemon,
  fetchPokemonData,
  setToggle,
}) {
  const [imagePath, setImagePath] = useState(
    `https://projectpokemon.org/images/normal-sprite/${evolution}.gif`
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
      .then((response) =>
        setImagePath(
          `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${response.data.id
            .toString()
            .padStart(3, '0')}.png`
        )
      );
  }, [evolution]);

  const handleClick = () => {
    fetchPokemonData(evolution, setPokemon, setPath);
    setToggle([true, true]);
  };

  const displayEvolutionDetails = () => {
    if (Object.keys(details) !== 0) {
      let key = Object.keys(details)[0];
      const value = Object.values(details)[0];
      let additionalRules = '';

      if (key === 'min_level') {
        const statsRule = Object.entries(details).filter(
          ([key]) => key === 'relative_physical_stats'
        );

        if (statsRule.length !== 0) {
          additionalRules = ` when ${
            EVOLUTION_DETAILS.stats[statsRule[0][1].toString()]
          }`;
        }
      }

      if (evolution === 'mantine') {
        key = 'party_species';
      }

      if (key === 'held_item') {
        if (details.time_of_day && details.time_of_day !== '') {
          additionalRules = `during ${details.time_of_day}`;
        } else {
          additionalRules = 'while trading';
        }
      }

      if (key === 'location') {
        switch (value.name) {
          case 'mt-coronet':
            return 'Thunder Stone';

          case 'eterna-forest':
            return 'Leaf Stone';

          case 'sinnoh-route-217':
            return 'Ice Stone';
        }
      }

      if (key === 'gender') {
        if (details.item) {
          additionalRules = ` using ${
            EVOLUTION_DETAILS.item[details.item.name]
          }`;
        }

        if (details.min_level) {
          additionalRules = ` at lvl ${details.min_level}`;
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

        case 'min_beauty':
          return EVOLUTION_DETAILS[key];

        case 'location':
          return additionalRules;

        case 'known_move_type':
          return `Knows a ${value.name}-type move when lvl up`;

        case 'known_move':
          return `Knows ${value.name} move when lvl up`;

        case 'min_level':
          return `Lvl ${value}${additionalRules}`;

        case 'held_item':
          return `Holding ${
            EVOLUTION_DETAILS.item[value.name]
          } ${additionalRules}`;

        case 'needs_overworld_rain':
          return 'Trading';

        case 'party_species':
          return `Having ${details.party_species.name} in your party when lvlv up`;

        case 'gender':
          return `${value === 2 ? `Male ♂` : 'Female ♀'}${additionalRules}`;
      }
    }
  };

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <div className={s.evolution_container} onClick={handleClick}>
      {loading && (
        <Spinner animation="border" variant="secondary" className={s.spinner} />
      )}
      <Image
        alt={`${name} evolution chain`}
        className={s.evolutions}
        src={imagePath}
        width={80}
        height={80}
        onLoadingComplete={handleLoading}
      />
      <p className={s.evolution_name}>{evolution}</p>
      <p className={s.evolution_details}>{displayEvolutionDetails()}</p>
    </div>
  );
}
