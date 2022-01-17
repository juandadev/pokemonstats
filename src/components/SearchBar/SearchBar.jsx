import React, { useContext, useState } from 'react';
import { FormControl, FormText, InputGroup } from 'react-bootstrap';
import { pokemon } from '../../context';

export default function SearchBar() {
  const [field, setField] = useState('');
  const { dispatch } = useContext(pokemon);

  const handleChange = (event) => {
    const { value } = event.target;

    setField(value);
  };

  const handleKeyDown = (event) => {
    const { target, key } = event;
    const { value } = target;

    if (key === 'Enter') {
      dispatch({
        type: 'CHANGE_INPUT',
        name: value
          .toLowerCase()
          .trim()
          .replaceAll(' ', '-'),
      });
      setField('');
    }
  };

  return (
    <>
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
      <FormText id="searchPokemon" className="mb-3">
        Type the pokemon name or code, then hit <code>Enter</code>
      </FormText>
    </>
  );
}
