'use client';

import React, { useContext, useState } from 'react';
import {
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { POKEMON_EXCEPTIONS, POKEMON_LIST } from '../../common/constants';
import { pokemon } from '../../context';
import s from './SearchBar.module.scss';
import { matchStringInArray } from '../../tools/utils';

type SuggestionType = {
  name: string;
  id: number | string;
};

export default function SearchBar() {
  const [field, setField] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [dropdownList, setDropdownList] = useState<SuggestionType[]>([]);
  const [activeItem, setActiveItem] = useState<SuggestionType>({
    name: '',
    id: '',
  });
  const { dispatch } = useContext(pokemon);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    setField(value);
  };

  const handleDropdownItemClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    const { id } = (event.target as HTMLButtonElement).dataset;

    dispatch({
      type: 'CHANGE_INPUT',
      name: id ?? 0,
    });
    setField('');
    setShowDropdown(false);
    setDropdownList([]);
    setActiveItem({ name: '', id: '' });
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, target } = event;
    const { value } = target as HTMLInputElement;
    const sanitizedValue = value.toLowerCase().trim();
    const searchResults = matchStringInArray(POKEMON_LIST, sanitizedValue, 4);
    const activeItemIndex = searchResults.findIndex(
      (item) => item === activeItem?.name
    );
    const pokemonExceptionIndex = (item: string) =>
      POKEMON_EXCEPTIONS.findIndex(({ name }) => name === item);

    switch (key) {
      case 'Escape':
        setActiveItem({ name: '', id: '' });
        setDropdownList([]);
        setShowDropdown(false);
        return;

      case 'Enter':
        dispatch({
          type: 'CHANGE_INPUT',
          name: activeItem?.id ?? field.trim(),
        });

        setField('');
        setActiveItem({ name: '', id: '' });
        setDropdownList([]);
        setShowDropdown(false);
        return;

      case 'ArrowUp':
        if (activeItemIndex > 0)
          setActiveItem({
            name: searchResults[activeItemIndex - 1],
            id:
              POKEMON_EXCEPTIONS[
                pokemonExceptionIndex(searchResults[activeItemIndex - 1])
              ]?.id ?? searchResults[activeItemIndex - 1],
          });
        return;

      case 'ArrowDown':
        if (activeItemIndex <= searchResults.length)
          setActiveItem({
            name: searchResults[activeItemIndex + 1] ?? activeItem.name,
            id:
              POKEMON_EXCEPTIONS[
                pokemonExceptionIndex(searchResults[activeItemIndex + 1])
              ]?.id ??
              searchResults[activeItemIndex + 1] ??
              activeItem.id,
          });
        return;
    }

    if (sanitizedValue !== '') {
      const resultsObjectList: SuggestionType[] = searchResults.map(
        (result) => {
          const getPokemonException = POKEMON_EXCEPTIONS.find(
            ({ name }) => name === result
          );

          return {
            name: result,
            id: getPokemonException ? getPokemonException.id : result,
          };
        }
      );

      setDropdownList(resultsObjectList);
      setShowDropdown(true);
      setActiveItem(resultsObjectList[0]);

      return;
    }

    setActiveItem({ name: '', id: '' });
    setDropdownList([]);
    setShowDropdown(false);
  };

  return (
    <>
      <div className={s.searchContainer}>
        <InputGroup>
          <InputGroup.Text id="searchPokemon">Search</InputGroup.Text>
          <FormControl
            autoComplete="off"
            placeholder="Type pokémon name"
            aria-label="pokémon"
            aria-describedby="searchPokémon"
            value={field}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
        </InputGroup>
        {showDropdown && (
          <ListGroup className={s.dropdown}>
            {dropdownList.map(({ name, id }) => (
              <ListGroupItem
                key={`search-${name}-${id}`}
                data-id={id}
                action
                onClick={handleDropdownItemClick}
                active={activeItem.name === name}
              >
                {name}
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </div>
    </>
  );
}
