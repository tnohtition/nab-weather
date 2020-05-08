import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import WeatherCard from 'containers/WeatherCard';

const Weather = ({woeid}) => {
  const ranges = (size = 5) => {
    return (new Array(size)).fill(null).map((item, idx) => {
      const now = new Date();
      return now.setDate(now.getDate() + idx);
    });
  }
  const weatherCardEles = ranges().map(d => {
    const date = new Date(d);
    return <Col key={date.getDay()}>
      <WeatherCard date={date} woeid={woeid}/>
    </Col>
  });
  return <Row>
    {weatherCardEles}
  </Row>;
}

export default Weather;
