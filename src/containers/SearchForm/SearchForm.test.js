import React from 'react';
import { shallow, mount } from 'enzyme';
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
    const searchForm = mount(<SearchForm onSubmit={onSubmit} />);

    // input search
    const search = 'ho chi minh';
    const searchInput = searchForm.find('input');
    searchInput.simulate('change', { target: { value: search } });

    // submit
    const form = searchForm.find('form');
    form.simulate('submit', { target: { search: search } });

    expect(onSubmit).toBeCalled();
  });
});
