import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('When the Header component is instantiated', () => {
    it('should render correctly', () => {
        const component = shallow(<Header/>);
        expect(component).toBeDefined();
    });
});