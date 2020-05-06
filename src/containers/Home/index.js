import React from 'react';
import Search from 'containers/Search';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const Home = () => {
  return <Container>
    <Row>
      <Col>
        <Jumbotron>
          <Container>
            <Search />
          </Container>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;
}

export default Home;
