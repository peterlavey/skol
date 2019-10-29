import React from 'react';
import Beer from "../beer3";

const Beers = ({beers = [], numCols = 3})=> {
    const beersCards = beers.map((beer, i)=> (
        <div className={`col-sm-${12 / numCols} mt-4`} key={`beer${i}`}>
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