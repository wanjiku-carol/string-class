import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { sinon, spy } from 'sinon';

import { Methods } from '../src/components/Methods';

configure({ adapter: new Adapter() });

describe('<Methods />', ()=>{
    
    it('Renders the component',()=>{
        const wrapper = shallow(<Methods />);
        wrapper;
    });

    it('Should have a div wrapper',()=>{
        const wrapper = shallow(<Methods />);
        expect(wrapper.type()).to.eql('div');
    });

    it('Should have two paragraphs texts', ()=>{
        const wrapper = shallow(<Methods />);
        expect(wrapper.find("p")).to.have.length(2);
    });

    it('Sets state of name', ()=>{
        const wrapper = mount(<Methods />);
        wrapper.setState({name: 'test string'});
        expect(wrapper.state().name).to.equal('test string');
    });

    it('Sets state of value', ()=>{
        const wrapper = mount(<Methods />);
        wrapper.setState({value: 'hasVowel'});
        expect(wrapper.state().value).to.equal('hasVowel');
    });

    it('Button sets method for response', ()=>{
        const wrapper = mount(<Methods />);
        wrapper.setState({value: "hasVowels"});
        wrapper.setState({name: 'test string'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state().name).to.equal('test string');
        expect(wrapper.state().response).to.equal('true');
    });
});
