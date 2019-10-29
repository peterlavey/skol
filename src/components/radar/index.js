import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const initialState = {
    bitterness: 0,
    sourness: 0,
    sweetness: 0,
    toastyness: 0,
    strongness: 0
};

const Radar = (data = initialState)=> {
    const _data = {
        ...data,
        meta: {
            color: 'yellow'
        }
    };

    const captions = {
        bitterness: 'Amargor',
        sourness: 'Acidez',
        sweetness: 'Dulzura',
        toastyness: 'Tostado',
        strongness: 'Fuerte'
    };

    const options = {
        captionProps: ()=> ({
            className: 'caption',
            textAnchor: 'middle',
            fontSize: 10,
            fontFamily: 'Roboto'
        })
    };

    return (
       <RadarChart captions={captions} data={[_data]} options={options} size={150}/>
    );
};

export default Radar;