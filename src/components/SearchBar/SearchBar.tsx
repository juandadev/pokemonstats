'use client';

import React, { useContext, useState } from 'react';
import {
  FormControl,
  FormText,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { POKEMON_EXCEPTIONS } from '../../common/constants';
import { pokemon } from '../../context';
import s from './SearchBar.module.scss';

// TODO: Need to add exceptions for some pokemons with different name in the API, mostly those with variants.
/*
Lycanrock and its different forms
Pumpkaboo
Perrserker
Doublade
Burmy
Basculin
Darmanitan
Minior
Meowstic
Sinistea
Eiscue
Alolan, galar and other region forms
Some legendary pokemons like zacian and zamazenta
*/
// TODO: need to find a way to improve search experience for pokemons with more than two words
// TODO: search suggestions and error handling
// TODO: change focus to dropdown when appears

type SuggestionType = {
  name: string;
  id: number;
};

export default function SearchBar() {
  const [field, setField] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [dropdownList, setDropdownList] = useState<SuggestionType[]>([]);
  const { dispatch } = useContext(pokemon);

  const handleChange = (event) => {
    const { value } = event.target;

    setField(value);
  };

  const handleSuggestions = (suggestions: SuggestionType[] = []) => {
    setDropdownList(suggestions);
    setShowDropdown(true);
  };

  const filterException = (value) => {
    const sanitizedValue = value
      .toLowerCase()
      .trim()
      .replaceAll(/[\s.]+/g, '-');
    const isNameAnException = POKEMON_EXCEPTIONS.some((item) =>
      sanitizedValue.includes(item)
    );
    // Need to avoid the final letter of the pokemon name to trigger the dropdown properly
    switch (sanitizedValue) {
      case 'nidora':
        handleSuggestions([
          { name: 'Nidoran ♂', id: 32 },
          { name: 'Nidoran ♀', id: 29 },
        ]);
        return sanitizedValue;

      case 'lycanro':
        handleSuggestions([
          { name: 'Lycanroc Midday', id: 745 },
          { name: 'Lycanroc Midnight', id: 10126 },
          { name: 'Lycanroc Dusk Form', id: 10152 },
        ]);
        return sanitizedValue;

      default:
        if (!isNameAnException) {
          setDropdownList([]);
          setShowDropdown(false);
        }
        return sanitizedValue;
    }
  };

  const handleKeyDown = (event) => {
    const { target, key } = event;
    const { value } = target;
    const filteredValue = filterException(value);
    const isNameAnException = POKEMON_EXCEPTIONS.some((item) =>
      filteredValue.includes(item)
    );

    if (key === 'Enter' && !isNameAnException) {
      dispatch({
        type: 'CHANGE_INPUT',
        name: filteredValue,
      });
      setField('');
    }
  };

  const handleDropdownItemClick = (event) => {
    const { id } = event.target.dataset;

    dispatch({
      type: 'CHANGE_INPUT',
      name: id,
    });
    setField('');
    setShowDropdown(false);
    setDropdownList([]);
  };

  const renderDropdownItems = () =>
    dropdownList.map(({ name, id }) => (
      <ListGroupItem
        key={`search-${id}`}
        data-id={id}
        action
        onClick={handleDropdownItemClick}
      >
        {name}
      </ListGroupItem>
    ));

  return (
    <>
      <div className={s.searchContainer}>
        <InputGroup>
          <InputGroup.Text id="searchPokemon">Search</InputGroup.Text>
          <FormControl
            placeholder="Type name or code"
            aria-label="pokemon"
            aria-describedby="searchPokemon"
            value={field}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </InputGroup>
        {showDropdown && (
          <ListGroup className={s.dropdown}>{renderDropdownItems()}</ListGroup>
        )}
      </div>
      <FormText id="searchPokemon" className="mb-3">
        Type the pokemon name or code, then hit <code>Enter</code>
      </FormText>
    </>
  );
}
