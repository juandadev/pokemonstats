'use client';

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { pokemon as searchField } from '../../context';
import {
  Chain,
  EvolutionsData,
  PokemonData,
  PokemonEvolutionType,
  Species,
  Sprites,
  Stat,
  Type,
} from '@/types/Pokemon.type';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TYPE_LABELS } from '@/common/constants';
import { InfoIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { displayEvolutionDetails } from '@/lib/utils';
import { clsx } from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';

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
  // const [loading, setLoading] = useState<boolean>(true);
  const [imagePath, setImagePath] = useState<string>(
    `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`
  );
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

  const fetchSpecies = async ({ id }: PokemonData): Promise<Species> => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      return (await response.json()) as Species;
    } catch {
      return {
        base_happiness: 0,
        capture_rate: 0,
        color: {
          name: '',
          url: '',
        },
        egg_groups: [],
        evolution_chain: {
          url: '',
        },
        evolves_from_species: {
          name: '',
          url: '',
        },
        flavor_text_entries: [],
        form_descriptions: [],
        forms_switchable: false,
        gender_rate: 0,
        genera: [],
        generation: {
          name: '',
          url: '',
        },
        growth_rate: {
          name: '',
          url: '',
        },
        habitat: {
          name: '',
          url: '',
        },
        has_gender_differences: false,
        hatch_counter: 0,
        id: 0,
        is_baby: false,
        is_legendary: false,
        is_mythical: false,
        name: 'normal',
        names: [],
        order: 0,
        pal_park_encounters: [],
        pokedex_numbers: [],
        shape: {
          name: '',
          url: '',
        },
        varieties: [],
      };
    }
  };

  const fetchEvolutions = (
    { evolution_chain }: Species,
    setEvolutions: React.Dispatch<
      React.SetStateAction<EvolutionsData | Partial<EvolutionsData>>
    >
  ) => {
    fetch(evolution_chain?.url)
      .then((response) => response.json())
      .then((data) => {
        setEvolutions(data);
      })
      .catch((error) => error);
  };

  // const switch3d = (
  //   id: number,
  //   name: string,
  //   setPath: React.Dispatch<React.SetStateAction<string>>,
  //   toggle: boolean[],
  //   setToggle: React.Dispatch<React.SetStateAction<boolean[]>>
  // ) => {
  //   if (toggle[0]) {
  //     setPath(`https://projectpokemon.org/images/normal-sprite/${name}.gif`);
  //   } else {
  //     setPath(
  //       `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
  //         .toString()
  //         .padStart(3, '0')}.png`
  //     );
  //   }
  //
  //   setToggle((state) => [!state[0], true]);
  // };

  // const switch2d = (
  //   id: number,
  //   name: string,
  //   setPath: React.Dispatch<React.SetStateAction<string>>,
  //   toggle: boolean[],
  //   setToggle: React.Dispatch<React.SetStateAction<boolean[]>>
  // ) => {
  //   if (toggle[1]) {
  //     setPath(name);
  //   } else {
  //     setPath(
  //       `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
  //         .toString()
  //         .padStart(3, '0')}.png`
  //     );
  //   }
  //
  //   setToggle((state) => [true, !state[1]]);
  // };

  // const handleError = () => {
  //   const { sprites } = pokemon;
  //
  //   setImagePath(
  //     sprites.front_default ||
  //       'https://i.ebayimg.com/images/g/q8AAAOSwhvpeEZBn/s-l300.png'
  //   );
  //
  //   setLoading(false);
  // };
  //
  // const handleLoading = () => {
  //   setLoading(false);
  // };

  useEffect(() => {
    if (state.searchQuery !== '') {
      // setLoading(true);
      fetchPokemonData(state.searchQuery, setPokemon, setImagePath).then(
        (pokemonData: PokemonData) => {
          fetchSpecies(pokemonData).then((speciesData) => {
            fetchEvolutions(speciesData, setEvolutions);
          });
        }
      );
    }
  }, [fetchPokemonData, state.searchQuery]);

  return (
    <div className="space-y-6 w-full max-w-lg m-auto">
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden pt-0">
        <div
          className={clsx(
            'water-gradient p-6 text-white',
            TYPE_LABELS[pokemon.types[0]?.type.name]?.gradientBackground
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium opacity-90">
              #{pokemon.id.toString().padStart(3, '0')}
            </span>
            <div className={'flex gap-2'}>
              {pokemon.types.map(({ type }) => (
                <TypeBadge key={`type-${type.name}`} type={type.name} />
              ))}
            </div>
          </div>
          <h2
            className={clsx(
              'text-3xl font-bold mb-4 capitalize',
              TYPE_LABELS[pokemon.types[0]?.type.name]?.text
            )}
          >
            {pokemon.name}
          </h2>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div
                className={clsx(
                  'w-48 h-48 rounded-full flex items-center justify-center shadow-inner',
                  TYPE_LABELS[pokemon.types[0]?.type.name]
                    ?.gradientBackgroundLight
                )}
              >
                <img
                  src={imagePath}
                  alt={pokemon.name}
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            Evolution Chain
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {evolutions.chain &&
              evolutionChain(evolutions.chain)?.map((evolution, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-50"
                >
                  <div
                    className={clsx(
                      'w-12 h-12 rounded-full flex items-center justify-center overflow-hidden',
                      TYPE_LABELS[pokemon.types[0]?.type.name]
                        ?.gradientBackgroundLight
                    )}
                  >
                    <img
                      src={`https://projectpokemon.org/images/normal-sprite/${evolution.name}.gif`}
                      alt={evolution.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold capitalize">
                      {evolution.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {displayEvolutionDetails(
                        evolution.name,
                        evolution.evolutionDetails
                      )}
                    </div>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-blue-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Special evolution requirements</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
