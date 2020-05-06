import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Searchbox from 'components/Searchbox';
import Weather from 'containers/Weather';

const SearchForm = () => {
  return <Form>
    <Row>
      <Col xs={4}>
        <Searchbox />
      </Col>
    </Row>
    <Row>
      <Col>
        <Weather />
      </Col>
    </Row>
  </Form>;
}

export default SearchForm;
