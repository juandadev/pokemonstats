import React, { useContext, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { pokemon } from '../../context';

export default function SearchBar() {
  const [field, setField] = useState('');
  const { dispatch } = useContext(pokemon);

  const handleChange = (event) => {
    const { value } = event.target;

    setField(value);
    dispatch({
      type: 'CHANGE_INPUT',
      name: value.toLowerCase(),
    });
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
      <FormControl
        placeholder="Type name or code"
        aria-label="pokemon"
        aria-describedby="basic-addon1"
        value={field}
        onChange={handleChange}
      />
    </InputGroup>
  );
}
