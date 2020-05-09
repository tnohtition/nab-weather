import React from 'react';
import { shallow } from 'enzyme';
import Fetching from './index';

describe('Fetching component', () => {
  it('contains fetching', () => {
    const fetching = shallow(<Fetching />);
    expect(fetching.text().toLowerCase()).toEqual("fetching");
  });
});
