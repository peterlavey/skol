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
            return {...state, search: action.payload, beersFiltered: search(action.payload, state.beers)};
        case 'changeBeer':
            return {...state, beers: [...state.beers, action.payload]};
        default:
            throw new Error('Action must be defined');
    }
}

function search(search, beers) {
    console.log(beers.length);
    const searchRegx = new RegExp(cleanString(search), 'g');
    const searchByName = beers.filter((beer)=> cleanString(beer.name).match(searchRegx));
    const searchByBrewery = beers.filter((beer)=> cleanString(beer.brewery).match(searchRegx));
    const searchByType = beers.filter((beer)=> cleanString(beer.type).match(searchRegx));

    return removeDuplicates([...searchByName, ...searchByBrewery, ...searchByType], 'id');
}

function removeDuplicates(array, key) {
    return array.filter((obj, index, self) =>
        index === self.findIndex((el) => (
            el[key] === obj[key]
        ))
    )
}

function cleanString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
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