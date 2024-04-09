'use client';

import React, { useCallback, useContext, useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import { Badge, Button, Spinner } from 'react-bootstrap';
import EvolutionImage from '../EvolutionImage';
import { pokemon as searchField } from '../../context';
import s from './PokemonCard.module.scss';
import bg from './BackgroundPatterns.module.scss';
import {
  Chain,
  EvolutionsData,
  PokemonData,
  PokemonEvolutionType,
  Species,
  Sprites,
  Stat,
  Type,
} from '../../types/Pokemon.type';

type PokemonType = {
  id: number;
  sprites: Sprites | Partial<Sprites>;
  name: string;
  types: Type[];
  stats: Stat[];
};

export default function PokemonCard() {
  const [pokemon, setPokemon] = useState<PokemonType>({
    id: 0,
    sprites: {},
    name: '',
    types: [],
    stats: [],
  });
  const [evolutions, setEvolutions] = useState<
    EvolutionsData | Partial<EvolutionsData>
  >({});
  const [loading, setLoading] = useState<boolean>(true);
  const [imagePath, setImagePath] = useState<string>(
    `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`
  );
  const [toggle, setToggle] = useState<boolean[]>([true, true]);
  const { state } = useContext(searchField);

  const fetchPokemonData = useCallback(
    async (
      name: string | number,
      setPokemon: React.Dispatch<React.SetStateAction<PokemonType>>,
      setPath: React.Dispatch<React.SetStateAction<string>>
    ) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}/`
        );
        const data = await response.json();
        setPokemon(data);
        setPath(
          `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.id
            .toString()
            .padStart(3, '0')}.png`
        );
        return data;
      } catch (error) {
        return error;
      }
    },
    []
  );

  const evolutionChain = (pokemonChain: Chain) => {
    const evolutions: PokemonEvolutionType[] = [];

    if (pokemonChain) {
      const { species, evolves_to, evolution_details } = pokemonChain;

      evolutions.push({
        name: species.name,
        evolutionDetails: evolution_details?.[0],
      });

      if (evolves_to.length) {
        evolves_to.forEach((evolve) => {
          const subEvolutions = evolutionChain(evolve);
          evolutions.push(...subEvolutions);
        });
      }
    }

    return evolutions;
  };

  const renderTypes = (types: Type[]) => {
    return types.map((item) => {
      const { name } = item.type;

      return (
        <Badge key={`badge-${name}`} bg={name}>
          {name}
        </Badge>
      );
    });
  };

  const fetchSpecies = async ({ id }) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      const data: Species = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  const fetchEvolutions = (
    { evolution_chain },
    setEvolutions: React.Dispatch<React.SetStateAction<EvolutionsData>>
  ) => {
    fetch(evolution_chain?.url)
      .then((response) => response.json())
      .then((data) => setEvolutions(data))
      .catch((error) => error);
  };

  const switch3d = (
    id: number,
    name: string,
    setPath: React.Dispatch<React.SetStateAction<string>>,
    toggle: boolean[],
    setToggle: React.Dispatch<React.SetStateAction<boolean[]>>
  ) => {
    if (toggle[0]) {
      setPath(`https://projectpokemon.org/images/normal-sprite/${name}.gif`);
    } else {
      setPath(
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
          .toString()
          .padStart(3, '0')}.png`
      );
    }

    setToggle((state) => [!state[0], true]);
  };

  const switch2d = (
    id: number,
    name: string,
    setPath: React.Dispatch<React.SetStateAction<string>>,
    toggle: boolean[],
    setToggle: React.Dispatch<React.SetStateAction<boolean[]>>
  ) => {
    if (toggle[1]) {
      setPath(name);
    } else {
      setPath(
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
          .toString()
          .padStart(3, '0')}.png`
      );
    }

    setToggle((state) => [true, !state[1]]);
  };

  const handleError = () => {
    const { sprites } = pokemon;

    setImagePath(
      sprites.front_default ||
        'https://i.ebayimg.com/images/g/q8AAAOSwhvpeEZBn/s-l300.png'
    );

    setLoading(false);
  };

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (state.name !== '') {
      setLoading(true);
      fetchPokemonData(state.name, setPokemon, setImagePath).then(
        (pokemonData: PokemonData) => {
          fetchSpecies(pokemonData).then((speciesData) => {
            fetchEvolutions(speciesData, setEvolutions);
          });
        }
      );
    }
  }, [fetchPokemonData, state.name]);

  return (
    <div className={s.card}>
      <div className={s.cover}>
        {loading && (
          <Spinner animation="border" variant="dark" className={s.spinner} />
        )}
        <Image
          id="pokemon-sprite"
          className={s.image}
          src={imagePath}
          alt="pokemon sprite"
          width={286}
          height={315}
          onLoadingComplete={handleLoading}
          onError={handleError}
        />
        <div className={`${s.back_img} ${bg[pokemon?.types[0]?.type?.name]}`} />
      </div>
      <div className={s.body}>
        {pokemon.name && (
          <div className={s.info}>
            <div className={s.title}>{`#${pokemon.id} ${pokemon.name}`}</div>
            <div className={s.types}>{renderTypes(pokemon.types)}</div>
          </div>
        )}
        {pokemon.name && (
          <>
            <div
              className={`d-flex justify-content-center ${s.sprite_options}`}
            >
              <Button
                className="me-3"
                onClick={() =>
                  switch3d(
                    pokemon.id,
                    pokemon.name,
                    setImagePath,
                    toggle,
                    setToggle
                  )
                }
              >
                {toggle[0] ? '3D sprite' : 'Normal image'}
              </Button>
              <Button
                onClick={() =>
                  switch2d(
                    pokemon.id,
                    pokemon.sprites.front_default || '',
                    setImagePath,
                    toggle,
                    setToggle
                  )
                }
              >
                {toggle[1] ? '2D sprite' : 'Normal image'}
              </Button>
            </div>
            <div className={s.evolutions_container}>
              <div className="d-flex flex-column">
                <strong className="mb-3">Evolution chain:</strong>
                <p className={s.hint}>
                  Some evolution details may vary depending on the{' '}
                  <code>generation</code> and <code>game</code>
                </p>
                <div className={s.image_container}>
                  {evolutions.chain &&
                    evolutionChain(evolutions.chain) &&
                    evolutionChain(evolutions.chain).map((item) => (
                      <EvolutionImage
                        key={`evolution-${item.name}`}
                        name={pokemon.name}
                        evolution={item.name}
                        details={item.evolutionDetails}
                        setToggle={setToggle}
                      />
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
