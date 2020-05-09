import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Searchbox = ({placeholder = 'Search (and hit `Enter`)', name, disabled = false}) => {
  return <InputGroup>
    <InputGroup.Prepend
      className="align-items-center bg-white pl-2">
      <SearchOutlinedIcon />
    </InputGroup.Prepend>
    <Form.Control
      disabled={disabled}
      className="border-0 rounded-0"
      type="text"
      name={name}
      placeholder={placeholder}
    />
  </InputGroup>
}

export default Searchbox;
