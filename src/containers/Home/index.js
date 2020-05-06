import React from 'react';
import SearchForm from 'containers/SearchForm';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const Home = () => {
  return <Container>
    <Row>
      <Col>
        <Jumbotron>
          <Container>
            <SearchForm />
          </Container>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;
}

export default Home;
