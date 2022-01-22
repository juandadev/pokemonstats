import React from 'react';
import axios from 'axios';
import {
  Badge,
  ListGroupItem,
  Spinner,
} from 'react-bootstrap';
import PokemonCard from './PokemonCard';
import s from './PokemonCar.module.scss';

export default function PokemonCardVM() {
  const loading = () => <Spinner animation="grow" size="sm" variant="dark" />;

  const renderTypes = (types) => types.map((item) => {
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
        setPath(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${response.data.id.toString().padStart(3, '0')}.png`);

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

  const handleImage = ({ sprites }, setState) => {
    const is2dSprite = !!sprites.front_default;
    if (is2dSprite) {
      setState(sprites.front_default);
    } else {
      setState('https://i.ebayimg.com/images/g/q8AAAOSwhvpeEZBn/s-l300.png');
    }
  };

  const renderStats = ({ stats, name }) => stats
    .map((item, index) => (
      <ListGroupItem key={`${name}-stat-${index}`}>
        <strong className={s.stat_title}>{item.stat.name}:</strong> {item.base_stat}
      </ListGroupItem>
    ));

  const evolutionChain = (evolutionData) => {
    const { chain } = evolutionData;
    const evolutions = [];

    if (chain?.evolves_to.length !== 0) {
      const first = chain?.species.name;
      const secondChain = chain?.evolves_to;

      evolutions.push(first);

      if (secondChain && secondChain?.length !== 0) {
        const second = secondChain?.map((item) => item.species.name);
        const thirdChain = secondChain[0]?.evolves_to;

        second?.forEach((item) => evolutions.push(item));

        if (thirdChain && thirdChain?.length !== 0) {
          const third = thirdChain?.map((item) => item.species.name);

          third?.forEach((item) => evolutions.push(item));
        }
      }

      return evolutions;
    }

    return false;
  };

  const swithc3d = (id, name, setPath, toggle, setToggle) => {
    if (toggle[0]) {
      setPath(`https://projectpokemon.org/images/normal-sprite/${name}.gif`);
    } else {
      setPath(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, '0')}.png`);
    }

    setToggle((state) => [!state[0], true]);
  };

  const swithc2d = (id, name, setPath, toggle, setToggle) => {
    if (toggle[1]) {
      setPath(name);
    } else {
      setPath(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, '0')}.png`);
    }

    setToggle((state) => [true, !state[1]]);
  };

  const mapProps = {
    loading,
    renderTypes,
    fetchPokemonData,
    handleImage,
    renderStats,
    fetchEvolutions,
    fetchSpecies,
    evolutionChain,
    swithc3d,
    swithc2d,
  };

  return <PokemonCard {...mapProps} />;
}
