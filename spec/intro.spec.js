import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow} from 'enzyme';
import { expect } from 'chai';
import { Intro } from '../src/components/Intro';

configure({ adapter: new Adapter() });

describe('<Intro />', ()=>{
    const wrapper = shallow(<Intro />);
    it('should have a div wrapper', ()=>{
        expect(wrapper.type()).to.eql('div');
    });

    it('should have a span', ()=>{
        expect(wrapper.find('span').every('span')).to.be.equal(true);
    })
})