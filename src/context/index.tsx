'use client';

import React, { createContext, ReactNode, useReducer } from 'react';

type StateType = {
  name: string;
};

type ActionType = {
  type: string;
  name?: string;
};

const initialState: StateType = { name: '' };
const pokemon = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => {} });
const { Provider } = pokemon;

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        name: action.name || '',
      };

    default:
      return state;
  }
}

function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { pokemon, ContextProvider };
