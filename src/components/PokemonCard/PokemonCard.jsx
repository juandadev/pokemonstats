import React, {
  createRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import {
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import EvolutionImage from './EvolutionImage';
import { pokemon as searchField } from '../../context';
import s from './PokemonCar.module.scss';

export default function PokemonCard(props) {
  const {
    loading,
    renderTypes,
    fetchPokemonData,
    handleImage,
    fetchEvolutions,
    fetchSpecies,
    evolutionChain,
  } = props;
  const [pokemon, setPokemon] = useState({
    id: 0,
    sprites: {},
    name: '',
    types: [],
    stats: [],
  });
  const [evolutions, setEvolutions] = useState({});
  const [imagePath, setImagePath] = useState(`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`);
  const { state } = useContext(searchField);

  useEffect(() => {
    if (state.name !== '') {
      fetchPokemonData(
        state.name,
        setPokemon,
        setImagePath,
      ).then((pokemonData) => {
        fetchSpecies(pokemonData)
          .then((speciesData) => {
            fetchEvolutions(speciesData, setEvolutions);
          });
      });
    }
  }, [state]);

  return (
    <Card className="position-relative">
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
        <Card.Title className={s.title}>
          {pokemon.name ? `#${pokemon.id} ${pokemon.name}` : loading()}
        </Card.Title>
        <Card.Text className={s.types}>
          {renderTypes(pokemon.types)}
        </Card.Text>
      </Card.Body>
      {pokemon.name && (
        <ListGroup className="list-group-flush">
          <ListGroupItem className="d-flex flex-column">
            <strong className="mb-3">Evolution chain:</strong>
            <div className={s.image_container}>
              {
                evolutionChain(evolutions)
                  .map((item, index) => (
                    <EvolutionImage
                      key={`evolution-${index}`}
                      name={pokemon.name}
                      evolution={item}
                      fetchPokemonData={fetchPokemonData}
                      setPath={setImagePath}
                      setPokemon={setPokemon}
                    />
                  ))
              }
            </div>
          </ListGroupItem>
        </ListGroup>
      )}
    </Card>
  );
}
