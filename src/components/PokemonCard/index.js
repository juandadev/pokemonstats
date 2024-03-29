import React from 'react';
import axios from 'axios';
import { Badge } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

export default function PokemonCardVM() {
  const renderTypes = (types) =>
    types.map((item) => {
      const { name } = item.type;

      return (
        <Badge key={`badge-${name}`} bg={name}>
          {name}
        </Badge>
      );
    });

  const fetchPokemonData = async (name, setPokemon, setPath) => {
    const data = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((response) => {
        setPokemon(response.data);
        setPath(
          `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${response.data.id
            .toString()
            .padStart(3, '0')}.png`
        );

        return response.data;
      })
      .catch((error) => error);

    return data;
  };

  const fetchSpecies = async ({ id }) => {
    const data = await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((response) => response.data)
      .catch((error) => error);

    return data;
  };

  const fetchEvolutions = ({ evolution_chain }, setEvolutions) => {
    axios
      .get(evolution_chain?.url)
      .then((response) => setEvolutions(response.data))
      .catch((error) => error);
  };

  const evolutionChain = (pokemonChain) => {
    const evolutions = [];

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

    return evolutions.length ? evolutions : false;
  };

  const switch3d = (id, name, setPath, toggle, setToggle) => {
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

  const switch2d = (id, name, setPath, toggle, setToggle) => {
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

  const mapProps = {
    renderTypes,
    fetchPokemonData,
    fetchEvolutions,
    fetchSpecies,
    evolutionChain,
    switch3d,
    switch2d,
  };

  return <PokemonCard {...mapProps} />;
}
