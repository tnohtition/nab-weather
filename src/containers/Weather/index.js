import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Weather = () => {
  return <Row className='bg-white p-5'>
    <Col>
      <Card>
        <Card.Body>Monday</Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>Tuesday</Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>Wednesday</Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>Thurday</Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>Friday</Card.Body>
      </Card>
    </Col>
  </Row>;
}

export default Weather;
