import React from 'react';
import Beer from "../beer";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import fly from './404.png';
import './style.css';

const Beers = ({beers = [], numCols = 3})=> {
    const notFound = (
        <div className={'text-center mt-5'}>
            <strong className={'h1 grey-text'}>Cerveza no encontrada :(</strong>
            <img src={fly} className="img-fluid mx-auto d-block mt-3" alt={'Cannot find beer'} style={{opacity: 0.3}}/>
        </div>
    );

    const beersCards = beers.map((beer, i)=> (
        <CSSTransition timeout={300} classNames={'beer'} key={`beer${i}`}>
            <div className={`col-sm-${12 / numCols} mt-4`}  >
                <Beer data={beer}/>
            </div>
        </CSSTransition>
    ));

    const hasBeers = beers.length > 0;

    return (
        <div>
            {hasBeers ?
                <TransitionGroup className="row card-deck">
                    {beersCards}
                </TransitionGroup>
                : notFound}
        </div>

    );
};

export default Beers;