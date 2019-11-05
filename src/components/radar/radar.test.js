import React from 'react';
import { shallow } from 'enzyme';
import Radar from './index';
import {beers} from '../../mocks';

const props = {
    data: beers[0].taste
};

describe('When the Radar component is instantiated', () => {
    let component;

    beforeAll(()=> {
        component = shallow(<Radar {...props}/>);
    });

    it('should render correctly', () => {
        expect(component).toBeDefined();
    });
});