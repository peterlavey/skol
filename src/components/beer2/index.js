import React from 'react';
import Radar from "../radar";
import Generic from './generic.png';
import './beer.css';

const Beer = ({data})=> {
    return (
        <div className="card">
            <div className="card-body">
                <div className={'row'}>
                    <div className={`col-sm-4`}>
                        <div className="view overlay">
                            <img className="card-img-top" src={data.image ? data.image : Generic} alt={data.name}/>
                        </div>
                    </div>

                    <div className={`col-sm-8`}>
                        <Radar data={data.taste}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={`col-sm-12`}>
                        <h4 className="card-title">{data.name}</h4>
                        <p className="card-text">{data.brewery} - {data.type}</p>
                    </div>
                </div>
            </div>

            <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                <ul className="list-unstyled list-inline font-small">
                    <li className="list-inline-item pr-2 white-text">
                        <i className="fab fa-raspberry-pi pr-1"/>
                        {data.ibu}
                    </li>

                    <li className="list-inline-item pr-2 white-text">
                        <i className="fas fa-beer pr-1"/>
                        {data.abv}%
                    </li>

                    <li className="list-inline-item pr-2 white-text">
                        <i className="fas fa-palette pr-1"/>
                        {data.srm}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Beer;