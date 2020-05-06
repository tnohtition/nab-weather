import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Searchbox = ({placeholder = 'Search'}) => {
  return <InputGroup>
    <InputGroup.Prepend
      className="align-items-center bg-white pl-2"
    >
      <SearchOutlinedIcon />
    </InputGroup.Prepend>
    <FormControl
      className="border-0 rounded-0"
      type="text" placeholder={placeholder}
    />
  </InputGroup>
}

export default Searchbox;
