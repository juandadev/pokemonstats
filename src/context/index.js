/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { createContext, useReducer } from 'react';

const initialState = { name: '' };
const pokemon = createContext(initialState);
const { Provider } = pokemon;

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CHANGE_INPUT':
        return {
          name: action.name,
        };

      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { pokemon, ContextProvider };
