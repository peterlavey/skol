import React from 'react';
import Radar from "../radar";
import Generic from './generic.png';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon, MDBMask, MDBView} from "mdbreact";
import './beer.css';

const Beer = ({data})=> {
    const fontSize = data.name.length > 18 ? 'h4' : 'h3';

    const SrmMeasure = (
        <li className="list-inline-item pr-2 white-text">
            <i className="fas fa-palette pr-1"/>
            {data.srm}
        </li>
    );

    return (
        <MDBCard>
            <MDBView>
                <img src="https://untappd.akamaized.net/site/beer_logos_hd/beer-1887370_e0fea_hd.jpeg" className="img-fluid" alt=""/>
                <MDBMask className="flex-center" overlay="black-strong">
                    <div className={'text-center'}>
                        <h5 className='pink-text'>
                            <MDBIcon icon='beer'/> {data.type}
                        </h5>
                        <MDBCardTitle tag={fontSize} className='white-text pt-2'>
                            <strong>{data.name}</strong>
                        </MDBCardTitle>
                        <p className={'white-text'}>
                            {data.brewery}
                        </p>
                    </div>
                </MDBMask>
            </MDBView>

            <MDBCardBody>
                <Radar data={data.taste}/>
            </MDBCardBody>

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

                    {data.srm ? SrmMeasure : null}
                </ul>
            </div>
        </MDBCard>

    );
};

export default Beer;