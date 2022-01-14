import React, { useContext, useEffect, useState } from 'react';
import {
  Badge,
  Card,
  ListGroup,
  ListGroupItem,
  Spinner,
} from 'react-bootstrap';
import axios from 'axios';
import { pokemon as searchField } from '../../context';
import s from './PokemonCar.module.scss';

export default function PokemonCard() {
  const [pokemon, setPokemon] = useState({
    sprites: {},
    name: '',
    types: [],
    stats: [],
  });
  const { state } = useContext(searchField);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${state.name}/`)
      .then((response) => setPokemon(response.data))
      .catch((error) => error);
  }, [state]);

  const loading = () => <Spinner animation="grow" size="sm" variant="dark" />;

  const renderTypes = (types) => types.map((item) => {
    const { name } = item.type;

    return <Badge key={`badge-${name}`} bg={name}>{name}</Badge>;
  });

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        className={s.image}
        variant="top"
        src={
          pokemon.sprites.front_default
          || 'https://www.tibs.org.tw/images/default.jpg'
        }
      />
      <Card.Body>
        <Card.Title className={s.title}>{pokemon.name || loading()}</Card.Title>
        <Card.Text className={s.types}>
          {pokemon.types ? renderTypes(pokemon.types) : loading}
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
