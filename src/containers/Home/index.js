import React from 'react';
import SearchForm from 'containers/SearchForm';
import Weather from 'containers/Weather';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const Home = () => {
  return <Container>
    <Row>
      <Col>
        <Jumbotron>
          <Container>
            <Row className="mb-2">
              <Col>
                <SearchForm />
              </Col>
            </Row>
            <Row>
              <Col>
                <Weather />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;
}

export default Home;
