import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';
import SearchForm from 'containers/SearchForm';
import Weather from 'containers/Weather';

jest.mock('axios');

describe('Home containers', () => {
  it('contains SearchForm', () => {
    const home = shallow(<Home />);
    expect(home.containsMatchingElement(<SearchForm />)).toEqual(true);
  });

  it('contains Weather', () => {
    const home = shallow(<Home />);
    expect(home.containsMatchingElement(<Weather />)).toEqual(true);
  });
});