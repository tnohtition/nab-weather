import React from 'react';
import { shallow } from 'enzyme';
import Temperature from './index';

describe('Temperature component', () => {
  it('contains default Min', () => {
    const temperature = shallow(<Temperature />);
    expect(temperature.containsMatchingElement(<p>Min: </p>)).toEqual(true);
  });

  it('contains Min', () => {
    const temperature = shallow(<Temperature min={12.12} />);
    expect(temperature.containsMatchingElement(<p>Min: 12.12</p>)).toEqual(true);
  });

  it('contains default Max', () => {
    const temperature = shallow(<Temperature />);
    expect(temperature.containsMatchingElement(<p>Max: </p>)).toEqual(true);
  });

  it('contains Max', () => {
    const temperature = shallow(<Temperature max={39} />);
    expect(temperature.containsMatchingElement(<p>Max: 39</p>)).toEqual(true);
  });
});
