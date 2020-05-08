import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import WeatherCard from 'containers/WeatherCard';

const buildRange = (size = 5) => {
  return (new Array(size)).fill(null).map((item, idx) => {
    const now = new Date();
    return new Date(now.setDate(now.getDate() + idx));
  });
}
const defaultRange = buildRange();

const Weather = ({ woeid }) => {
  const [range, setRange] = useState(defaultRange);

  const weatherCardEles = range.map(date => {
    return <Col key={date.getDay()}>
      <WeatherCard date={date} woeid={woeid}/>
    </Col>
  });
  return <Row>
    {weatherCardEles}
  </Row>;
}

export default Weather;
