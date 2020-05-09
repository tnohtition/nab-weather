import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './index';
import Searchbox from 'components/Searchbox';

describe('SearchForm containers', () => {
  it('contains Searchbox', () => {
    const searchForm = shallow(<SearchForm />);
    expect(searchForm.containsMatchingElement(<Searchbox />)).toEqual(true);
  });

  it('contains disabled Searchbox', () => {
    const searchForm = shallow(<SearchForm disabled/>);
    expect(searchForm.containsMatchingElement(<Searchbox disabled/>)).toEqual(true);
  });

  it('should onSubmit', () => {
    const onSubmit = jest.fn();
    const searchForm = shallow(<SearchForm onSubmit={onSubmit} />);

    const form = searchForm.find('Form');
    const preventDefault = jest.fn();
    form.simulate('submit', {
      preventDefault,
      target: { search: 'ho chi minh' }
    });

    expect(onSubmit).toBeCalled();
  });
});
