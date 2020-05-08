import React, {useReducer, useEffect, useState} from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import SearchForm from 'containers/SearchForm';
import Weather from 'containers/Weather';
import Location from 'components/Location';
import NotFound from 'components/NotFound';
import reducer, {initialState} from './reducer';
import {
  fetchLocation,
  fetchLocationSuccess,
  fetchLocationError,
} from './actions';

const endpoint = `https://www.metaweather.com/api/location/search`;
const corsEndpoint = `https://cors-anywhere.herokuapp.com/`;

const Home = () => {
  const [formData, setFormData] = useState({});
  const handleSubmit = formData => {
    setFormData(formData);
  }

  const {search = ''} = formData;

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const reqLocation = async (query = '') => {
      dispatch(fetchLocation());
      try {
        const url = `${corsEndpoint}${endpoint}`
        const params = {
          query,
        }
        const res = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
          params,
        });
        const {data} = res;
        const location = data.length ? data[0] : {woeid: -1};

        dispatch(fetchLocationSuccess(location));
      } catch (e) {
        dispatch(fetchLocationError(e));
      }
    }

    if (search) {
      reqLocation(search);
    }
  }, [search]);

  const {location, fetching} = state;
  let locationEle = null;
  let woeid = 0;
  if (location) {
    const {title, latt_long} = location;
    woeid = location.woeid;
    locationEle = <Row className="mb-2">
      <Col>
        {
          (woeid !== -1) ? <Location
            city={title}
            lattLong={latt_long}
            woeid={woeid}
          /> : <NotFound />
        }
      </Col>
    </Row>
  }

  return <Container>
    <Row>
      <Col>
        <Jumbotron>
          <Row className="mb-2">
            <Col>
              <SearchForm onSubmit={handleSubmit} disabled={fetching}/>
            </Col>
          </Row>
          {locationEle}
          <Row>
            <Col>
              <Weather woeid={woeid}/>
            </Col>
          </Row>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;
}

export default Home;
