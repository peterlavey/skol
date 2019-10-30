import React from 'react';
import Beer from "../beer";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './style.css';

const Beers = ({beers = [], numCols = 3})=> {
    const beersCards = beers.map((beer, i)=> (
        <CSSTransition timeout={300} classNames={'beer'} key={`beer${i}`}>
            <div className={`col-sm-${12 / numCols} mt-4`}  >
                <Beer data={beer}/>
            </div>
        </CSSTransition>
    ));

    return (
        <TransitionGroup className="row card-deck">
            {beersCards}
        </TransitionGroup>
    );
};

export default Beers;