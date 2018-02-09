import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('contains a welcome message', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).to.equal('<p>Welcome to my world</p>');
  });
 });