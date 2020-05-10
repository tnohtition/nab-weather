import React, {useEffect, useState} from 'react';
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
import withReducer from 'utils/withReducer';

export const Home = ({ location, fetching, dispatch }) => {
  const [formData, setFormData] = useState({});
  const handleSubmit = formData => {
    setFormData(formData);
  }
  const {search = ''} = formData;

  useEffect(() => {
    // minic the mapDispatchToProps
    const onFetchLocation = async (query = '') => {
      dispatch(fetchLocation());
      try {
        const params = {
          query,
        }
        const service = new MetaweatherLocationSearcherService();
        const res = await service.get(params);
        const { data } = res;
        const found = data.length ? data[0] : {};

        dispatch(fetchLocationSuccess(found));
      } catch (e) {
        dispatch(fetchLocationError(e));
      }
    }

    if (search) {
      onFetchLocation(search);
    }
  }, [search, dispatch]);

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

export default withReducer(Home, reducer, initialState);
