import React from 'react';
import { shallow } from 'enzyme';
import Beer from './index';
import {beers} from '../../mocks';

const props = {
    data: beers[0]
};

describe('When the Beer component is instantiated', () => {
    let component;

    beforeAll(()=> {
        component = shallow(<Beer {...props}/>);
    });

    it('should render correctly', () => {
        expect(component).toBeDefined();
    });

    it('should show 3 measures', () => {
        const measures = component.find('li');
        expect(measures.length).toBe(3);
    });

    it('should show the image of the beer', () => {
        const imgSrc = component.find('img').prop('src');
        const placeholderSrc = 'https://via.placeholder.com/960x500?text=...';
        expect(imgSrc).not.toBe(placeholderSrc);
    });
});

describe('When the Beer component is instantiated without an image', () => {
    let component;

    beforeAll(()=> {
        const _props = {data: {...props.data, image: ''}};
        component = shallow(<Beer {..._props}/>);
    });

    it('should replace with placeholder', () => {
        const imgSrc = component.find('img').prop('src');
        const placeholderSrc = 'https://via.placeholder.com/960x500?text=...';
        expect(imgSrc).toBe(placeholderSrc);
    });
});

describe('When the Beer component is instantiated without SRM measure', () => {
    let component;

    beforeAll(()=> {
        const _props = {data: {...props.data, srm: ''}};
        component = shallow(<Beer {..._props}/>);
    });

    it('should not show ABV measure', () => {
        const measures = component.find('li');
        expect(measures.length).toBe(2);
    });
});