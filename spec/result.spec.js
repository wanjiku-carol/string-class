import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Result from '../src/components/Result';

configure({ adapter: new Adapter() });

describe('<Result />', () => {
  const wrapper = shallow(<Result />);
  it('should have a div wrapper', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have one item in the "p" property', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });
  it('Textarea className to be "textarea-div"', () => {
    expect(wrapper.props().className).to.equal('textarea-div');
  });
});
