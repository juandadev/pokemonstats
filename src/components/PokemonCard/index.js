import React from 'react';
import {
  Badge,
  Spinner,
} from 'react-bootstrap';
import axios from 'axios';
import PokemonCard from './PokemonCard';

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

  const fetchPokemonData = (name, setPokemon, setPath) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((response) => {
        setPokemon(response.data);
        setPath(`https://projectpokemon.org/images/normal-sprite/${response.data.name}.gif`);
      })
      .catch((error) => error);
  };

  const handleImage = ({ sprites }, setState) => {
    const is2dSprite = !!sprites.front_default;
    console.log('error');
    if (is2dSprite) {
      setState(sprites.front_default);
    } else {
      setState('https://i.ebayimg.com/images/g/q8AAAOSwhvpeEZBn/s-l300.png');
    }
  };

  const mapProps = {
    loading,
    renderTypes,
    fetchPokemonData,
    handleImage,
  };

  return <PokemonCard {...mapProps} />;
}
