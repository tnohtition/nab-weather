import React, {useState, useReducer, useEffect} from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Searchbox from 'components/Searchbox';

const SearchForm = ({onSubmit, disabled}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      [e.target.search.name]: e.target.search.value,
    }

    if (onSubmit) {
      onSubmit(data);
    }
  }

  return <Form onSubmit={handleSubmit}>
    <Row>
      <Col xs={4}>
        <Searchbox name='search' disabled={disabled}/>
      </Col>
    </Row>
  </Form>;
}

export default SearchForm;
