import React from 'react';
import { shallow } from 'enzyme';
import Weather from './index';

describe('Weather containers', () => {
  it('contains 5 WeatherCard', () => {
    const weather = shallow(<Weather />);
    expect(weather.find('WeatherCard').length).toEqual(5);
  });
});
