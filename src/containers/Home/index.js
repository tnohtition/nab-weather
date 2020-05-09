import React, {useReducer, useEffect, useState} from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
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
import MetaweatherLocationSearcherService from 'services/MetaweatherLocationSearcherService';

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
        const params = {
          query,
        }
        const service = new MetaweatherLocationSearcherService();
        const res = await service.get(params);
        const {data} = res;
        const location = data.length ? data[0] : {};

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
    woeid = location.woeid || 0;
    locationEle = <Row className="mb-2">
      <Col>
        {
          woeid ? <Location
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
