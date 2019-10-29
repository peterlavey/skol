import React, {createContext, useReducer} from "react";
import {beers} from "./mocks";

export const Context = createContext({});

const initialState = {
    search: '',
    beers: beers,
    beersFiltered: tasteRandomizer(beers)
};

function tasteRandomizer(beers) {
    beers.forEach((beer)=> {
        beer.taste.bitterness = (Math.random() * 1) + 0
        beer.taste.sourness = (Math.random() * 1) + 0;
        beer.taste.strongness = (Math.random() * 1) + 0;
        beer.taste.sweetness = (Math.random() * 1) + 0;
        beer.taste.toastyness = (Math.random() * 1) + 0;
    });

    return beers;
}

function reducer(state, action) {
    switch (action.type) {
        case 'changeSearch':
            const search = new RegExp(action.payload, 'g');
            return {...state, search: action.payload, beersFiltered: state.beers.filter((beer)=> beer.name.match(search))};
        case 'changeBeer':
            return {...state, beers: [...state.beers, action.payload]};
        default:
            throw new Error('Action must be defined');
    }
}

const Store = ({children})=> {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <Context.Provider value={[state, dispatch]}>
          {children}
      </Context.Provider>
  )
};

export default Store;