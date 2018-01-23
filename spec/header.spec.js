import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow} from 'enzyme';
import { expect } from 'chai';
import { Header } from '../src/components/Header';

configure({ adapter: new Adapter() });

describe('<Header />', ()=>{
    const wrapper = shallow(<Header />);
    it('should have a div wrapper', ()=>{
        expect(wrapper.type()).to.eql('div');
    });

    it('should have a h2 heading', ()=>{
        expect(wrapper.find('h2')).to.have.length(1);
    });
    
    it('should have a class name "heading"', ()=>{
        expect(wrapper.hasClass("heading")).to.equal(true);
    })
});

