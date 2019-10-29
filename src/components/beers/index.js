import React, {useEffect, useState} from 'react';
import Beer from "../beer";
import {beers as _beers} from "../../mocks";

const Beers = ({numCols = 3})=> {

    const [beers, setBeers] = useState([]);

    useEffect(()=> {
        const beersFiltered = _beers.filter((beer)=> ~beer.type.indexOf('IPA'));
        setBeers(beersFiltered);
    });

    const beersCards = beers.map((beer)=> (
        <div className={`col-sm-${12 / numCols}`}>
            <Beer data={beer}/>
        </div>
    ));

    return (
        <div className="row card-deck">
            {beersCards}
        </div>
    );
};

export default Beers;