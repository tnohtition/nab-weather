import React from 'react';
import { shallow } from 'enzyme';
import Searchbox from './index';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

describe('Searchbox component', () => {
  it('contains SearchOutlinedIcon', () => {
    const searchBox = shallow(<Searchbox />);
    expect(searchBox.containsMatchingElement(<SearchOutlinedIcon />)).toEqual(true);
  });

  it('contains Form.Control', () => {
    const searchBox = shallow(<Searchbox />);
    expect(searchBox.containsMatchingElement(<Form.Control />)).toEqual(true);
  });

  it('Form.Control Default Placeholder', () => {
    const searchBox = shallow(<Searchbox />);
    expect(searchBox.containsMatchingElement(<Form.Control placeholder="Search (and hit `Enter`)"/>)).toEqual(true);
  });

  it('Form.Control Placeholder', () => {
    const searchBox = shallow(<Searchbox placeholder="Input something"/>);
    expect(searchBox.containsMatchingElement(<Form.Control placeholder="Input something" />)).toEqual(true);
  });

  it('Form.Control Name', () => {
    const searchBox = shallow(<Searchbox name="abc"/>);
    expect(searchBox.containsMatchingElement(<Form.Control name="abc" />)).toEqual(true);
  });

  it('Form.Control Default Disabled', () => {
    const searchBox = shallow(<Searchbox />);
    expect(searchBox.containsMatchingElement(<Form.Control disabled={false} />)).toEqual(true);
  });

  it('Form.Control Disabled', () => {
    const searchBox = shallow(<Searchbox disabled/>);
    expect(searchBox.containsMatchingElement(<Form.Control disabled />)).toEqual(true);
  });
});
