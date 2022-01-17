import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { pokemon as searchField } from '../../context';
import s from './PokemonCar.module.scss';

export default function PokemonCard(props) {
  const {
    loading,
    renderTypes,
    fetchPokemonData,
    handleImage,
  } = props;
  const [pokemon, setPokemon] = useState({
    sprites: {},
    name: '',
    types: [],
    stats: [],
  });
  const [imagePath, setImagePath] = useState(`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`);
  const { state } = useContext(searchField);

  useEffect(() => {
    if (state.name !== '') {
      fetchPokemonData(state.name, setPokemon, setImagePath);
    }
  }, [state]);

  return (
    <Card style={{ width: '18rem' }}>
      <Image
        id="pokemon-sprite"
        className={`card-img-top ${s.image}`}
        src={imagePath}
        alt="pokemon sprite"
        width={286}
        height={180}
        placeholder="blur"
        blurDataURL="https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"
        onError={() => handleImage(pokemon, setImagePath)}
      />
      <Card.Body>
        <Card.Title className={s.title}>{pokemon.name ? `#${pokemon.id} ${pokemon.name}` : loading()}</Card.Title>
        <Card.Text className={s.types}>
          {renderTypes(pokemon.types)}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
