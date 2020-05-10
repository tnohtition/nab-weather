import React from 'react';
import { shallow } from 'enzyme';
import Weather from './index';

describe('Weather containers', () => {
  it('contains 5 Col', () => {
    const weather = shallow(<Weather />);
    expect(weather.find('Col').length).toBe(5);
  });
});
