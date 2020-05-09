import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';

describe('NotFound component', () => {
  it('contains not found', () => {
    const notFound = shallow(<NotFound />);
    expect(notFound.text().toLowerCase()).toEqual("not found");
  });
});
