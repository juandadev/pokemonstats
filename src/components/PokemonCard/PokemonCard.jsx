import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import EvolutionImage from './EvolutionImage';
import { pokemon as searchField } from '../../context';
import s from './PokemonCard.module.scss';
import bg from './BackgroundPatterns.module.scss';

export default function PokemonCard(props) {
  const {
    loading,
    renderTypes,
    fetchPokemonData,
    handleImage,
    fetchEvolutions,
    fetchSpecies,
    evolutionChain,
    swithc3d,
    swithc2d,
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
  const [toggle, setToggle] = useState([true, true]);
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
    <div className={s.card}>
      <div className={s.cover}>
        <Image
          id="pokemon-sprite"
          className={s.image}
          src={imagePath}
          alt="pokemon sprite"
          width={286}
          height={315}
          placeholder="blur"
          blurDataURL="https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"
          onError={() => handleImage(pokemon, setImagePath)}
        />
        <div className={`${s.back_img} ${bg[pokemon?.types[0]?.type?.name]}`} />
      </div>
      <div className={s.body}>
        <div className={s.info}>
          <div className={s.title}>
            {pokemon.name ? `#${pokemon.id} ${pokemon.name}` : loading()}
          </div>
          <div className={s.types}>
            {renderTypes(pokemon.types)}
          </div>
        </div>
        <div className={`d-flex justify-content-center ${s.sprite_options}`}>
          <Button
            className="me-3"
            onClick={() => swithc3d(
              pokemon.id,
              pokemon.name,
              setImagePath,
              toggle,
              setToggle,
            )}
          >
            {toggle[0] ? '3D sprite' : 'Normal image'}
          </Button>
          <Button
            onClick={() => swithc2d(
              pokemon.id,
              pokemon.sprites.front_default,
              setImagePath,
              toggle,
              setToggle,
            )}
          >
            {toggle[1] ? '2D sprite' : 'Normal image'}
          </Button>
        </div>
        {pokemon.name && (
        <div className={s.evolutions_container}>
          <div className="d-flex flex-column">
            <strong className="mb-3">Evolution chain:</strong>
            <div className={s.image_container}>
              {
                evolutionChain(evolutions) ? evolutionChain(evolutions)
                  .map((item, index) => (
                    <EvolutionImage
                      key={`evolution-${index}`}
                      name={pokemon.name}
                      evolution={item}
                      fetchPokemonData={fetchPokemonData}
                      setPath={setImagePath}
                      setPokemon={setPokemon}
                      setToggle={setToggle}
                    />
                  )) : 'None'
              }
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
