import React from 'react';
import { shallow } from 'enzyme';
import {Home} from './index';
import SearchForm from 'containers/SearchForm';
import Weather from 'containers/Weather';
import Location from 'components/Location';
import NotFound from 'components/NotFound';

describe('Home containers', () => {
  it('contains SearchForm', () => {
    const home = shallow(<Home />);
    expect(home.containsMatchingElement(<SearchForm />)).toEqual(true);
  });

  it('contains Weather', () => {
    const home = shallow(<Home />);
    expect(home.containsMatchingElement(<Weather />)).toEqual(true);
  });

  it('do not contains Location', () => {
    const home = shallow(<Home />);
    expect(home.containsMatchingElement(<Location />)).toEqual(false);
  });

  it('contains Location', () => {
    const home = shallow(<Home location={{ woeid: 123 }}/>);
    expect(home.containsMatchingElement(<Location />)).toEqual(true);
  });

  it('contains Not Found Location', () => {
    const home = shallow(<Home location={{ }} />);
    expect(home.containsMatchingElement(<NotFound />)).toEqual(true);
  });
});
