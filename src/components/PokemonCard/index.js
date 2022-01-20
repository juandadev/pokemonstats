import React from 'react';
import axios from 'axios';
import {
  Badge,
  ListGroupItem,
  Spinner,
} from 'react-bootstrap';
import Image from 'next/image';
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
        // setPath(`https://projectpokemon.org/images/normal-sprite/${response.data.name}.gif`);

        return response.data;
      })
      .catch((error) => error);

    return data;
  };

  const fetchSpecies = async ({ id }, setSpecies) => {
    const data = await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((response) => {
        setSpecies(response.data);

        return response.data;
      })
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

  const renderChain = (evolutions, { name }) => {
    const { chain } = evolutions;
    const imageComponent = (imgName) => (
      <Image
        className={s.evolutions}
        src={`https://projectpokemon.org/images/normal-sprite/${imgName}.gif`}
        // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgName.padStart(3, '0')}.png`}
        width={80}
        height={80}
      />
    );
    const evolutionsImg = [];

    if (chain?.evolves_to.length !== 0) {
      const first = chain?.species.name;
      const secondChain = chain?.evolves_to;

      if (first && first !== name) {
        evolutionsImg.push(imageComponent(first));
      } else {
        evolutionsImg.push(<Spinner animation="grow" size="sm" variant="primary" className={s.spinner} />);
      }

      if (secondChain && secondChain?.length !== 0) {
        const second = secondChain?.map((item) => item.species.name);
        const thirdChain = secondChain[0]?.evolves_to;

        if (!!second?.find((item) => item === name) === false) {
          second?.forEach((item) => evolutionsImg.push(imageComponent(item)));
        } else {
          evolutionsImg.push(<Spinner animation="grow" size="sm" variant="primary" className={s.spinner} />);
        }

        if (thirdChain && thirdChain?.length !== 0) {
          const third = thirdChain?.map((item) => item.species.name);

          if (!!third?.find((item) => item === name) === false) {
            third?.forEach((item) => evolutionsImg.push(imageComponent(item)));
          } else {
            evolutionsImg.push(<Spinner animation="grow" size="sm" variant="primary" className={s.spinner} />);
          }
        }
      }

      return evolutionsImg;
    }

    return false;
  };

  const mapProps = {
    loading,
    renderTypes,
    fetchPokemonData,
    handleImage,
    renderStats,
    fetchEvolutions,
    fetchSpecies,
    renderChain,
  };

  return <PokemonCard {...mapProps} />;
}
