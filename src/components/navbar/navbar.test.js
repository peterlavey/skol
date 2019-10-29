import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';

describe('When the Header component is instantiated', () => {
    it('should render correctly', () => {
        const component = shallow(<Navbar/>);
        expect(component).toBeDefined();
    });
});