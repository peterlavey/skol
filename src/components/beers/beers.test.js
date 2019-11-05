import React from 'react';
import { shallow } from 'enzyme';
import Beer from './index';
import {beers} from '../../mocks';

const props = {
    beers,
    numCols: 2
};

describe('When the Beers component is instantiated', () => {
    let component;

    beforeAll(()=> {
        component = shallow(<Beer {...props}/>);
    });

    it('should render correctly', () => {
        expect(component).toBeDefined();
    });
});

describe('When the Beers component is instantiated without numCols', () => {
    let component;

    beforeAll(()=> {
        const _props = {beers};
        component = shallow(<Beer {..._props}/>);
    });

    it('should render 3 cols', () => {
        const colClassName = component.find('div').get(0).props.className;
        const numColThreeClass = 'col-sm-4';
        expect(colClassName).toContain(numColThreeClass);
    });
});

describe('When the Beers component is instantiated without beers', () => {
    let component;

    beforeAll(()=> {
        component = shallow(<Beer/>);
    });

    it('should render nothing', () => {
        const beers = component.find('div');
        const numExpected = 0;
        expect(beers.length).toBe(numExpected);
    });
});