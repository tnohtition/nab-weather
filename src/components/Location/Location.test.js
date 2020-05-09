import React from 'react';
import { shallow } from 'enzyme';
import Location from './index';

describe('Location component', () => {
  it('contains default City', () => {
    const location = shallow(<Location />);
    expect(location.containsMatchingElement(<span>City: </span>)).toEqual(true);
  });

  it('contains City', () => {
    const location = shallow(<Location city="Ho Chi Minh"/>);
    expect(location.containsMatchingElement(<span>City: Ho Chi Minh</span>)).toEqual(true);
  });

  it('contains default Woeid', () => {
    const location = shallow(<Location />);
    expect(location.containsMatchingElement(<span>Woeid: </span>)).toEqual(true);
  });

  it('contains Woeid', () => {
    const location = shallow(<Location woeid={132} />);
    expect(location.containsMatchingElement(<span>Woeid: {132}</span>)).toEqual(true);
  });

  it('contains delimiter', () => {
    const location = shallow(<Location />);
    expect(location.containsMatchingElement(<span> - </span>)).toEqual(true);
  });
});
