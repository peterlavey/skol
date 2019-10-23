import React from 'react';
import Beer from "../beer";

const Beers = ()=> {
    const beers = [{
        id: 111,
        name: 'khali',
        brewery: 'bundor',
        type: ['IPA'],
        ibu: 60,
        srm: 3,
        abv: 10,
        taste: {
            bitterness: 100,
            sourness: 100,
            sweetness: 100,
            toastyness: 100,
            strongness: 100
        },
        image: 'https://www.javas.cl/image/cache/catalog/CERVEZAS/bundor%20kali-500x500.png'
    },
        {
            id: 111,
            name: 'khali',
            brewery: 'bundor',
            type: ['IPA'],
            ibu: 60,
            srm: 3,
            abv: 10,
            taste: {
                bitterness: 100,
                sourness: 100,
                sweetness: 100,
                toastyness: 100,
                strongness: 100
            },
            image: 'https://www.javas.cl/image/cache/catalog/CERVEZAS/bundor%20kali-500x500.png'
        },
        {
            id: 111,
            name: 'khali',
            brewery: 'bundor',
            type: ['IPA'],
            ibu: 60,
            srm: 3,
            abv: 10,
            taste: {
                bitterness: 100,
                sourness: 100,
                sweetness: 100,
                toastyness: 100,
                strongness: 100
            },
            image: 'https://www.javas.cl/image/cache/catalog/CERVEZAS/bundor%20kali-500x500.png'
        },
        {
            id: 111,
            name: 'khali',
            brewery: 'bundor',
            type: ['IPA'],
            ibu: 60,
            srm: 3,
            abv: 10,
            taste: {
                bitterness: 100,
                sourness: 100,
                sweetness: 100,
                toastyness: 100,
                strongness: 100
            },
            image: 'https://www.javas.cl/image/cache/catalog/CERVEZAS/bundor%20kali-500x500.png'
        }];

    const beersCards = beers.map((beer)=> (
        <div className="col-sm">
            <Beer data={beer}/>
        </div>
    ));

    return (
        <div className="row">
            {beersCards}
        </div>
    );
};

export default Beers;