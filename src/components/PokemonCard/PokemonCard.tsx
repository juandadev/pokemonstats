'use client';

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import { Button, Spinner } from 'react-bootstrap';
import EvolutionImage from '../EvolutionImage';
import { pokemon as searchField } from '../../context';
import s from './PokemonCard.module.scss';
import bg from './BackgroundPatterns.module.scss';

// TODO: Fix broken pokemon fetching

export default function PokemonCard(props) {
  const {
    renderTypes,
    fetchPokemonData,
    fetchEvolutions,
    fetchSpecies,
    evolutionChain = () => {},
    switch3d,
    switch2d,
  } = props;
  const [pokemon, setPokemon] = useState({
    id: 0,
    sprites: {},
    name: '',
    types: [],
    stats: [],
  });
  const [evolutions, setEvolutions] = useState({});
  const [loading, setLoading] = useState(true);
  const [imagePath, setImagePath] = useState(
    `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`
  );
  const [toggle, setToggle] = useState([true, true]);
  const { state } = useContext(searchField);

  useEffect(() => {
    if (state.name !== '') {
      setLoading(true);
      fetchPokemonData(state.name, setPokemon, setImagePath).then(
        (pokemonData) => {
          fetchSpecies(pokemonData).then((speciesData) => {
            fetchEvolutions(speciesData, setEvolutions);
          });
        }
      );
    }
  }, [state]);

  const handleError = () => {
    const { sprites } = pokemon;
    const is2dSprite = !!sprites.front_default;

    if (is2dSprite) {
      setImagePath(sprites.front_default);
    } else {
      setImagePath(
        'https://i.ebayimg.com/images/g/q8AAAOSwhvpeEZBn/s-l300.png'
      );
    }
    setLoading(false);
  };

  const handleLoading = () => {
    setLoading(false);
  };

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
                    pokemon.sprites.front_default,
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
                  {evolutionChain(evolutions.chain) &&
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
