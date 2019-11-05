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
    //todo: Cuando esto este completo hay que quitar la duplicidad.
    const searchRegx = new RegExp(cleanString(search), 'g');
    const searchByName = beers.filter((beer)=> cleanString(beer.name).match(searchRegx));
    const searchByBrewery = beers.filter((beer)=> cleanString(beer.brewery).match(searchRegx));
    const searchByType = beers.filter((beer)=> cleanString(beer.type).match(searchRegx));
    const searchByCountry = beers.filter((beer)=> cleanString(beer.country).match(searchRegx));
    const searchByRegion = beers.filter((beer)=> cleanString(beer.region).match(searchRegx));

    return removeDuplicates([...searchByName, ...searchByBrewery, ...searchByType, ...searchByCountry, ...searchByRegion], 'id');
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