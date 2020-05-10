import React, {useEffect} from 'react';
import { Card } from 'react-bootstrap';
import Temperature from 'components/Temperature';
import NotFound from 'components/NotFound';
import Fetching from 'components/Fetching';
import {dayOfWeeks} from 'constants/Dates';
import reducer, {initialState} from './reducer';
import {
  fetchDayWeather,
  fetchDayWeatherSuccess,
  fetchDayWeatherError,
} from './actions';
import MetaweatherService from 'services/MetaweatherService';
import withReducer from 'utils/withReducer';

export const WeatherCard = ({ date = new Date(), woeid, weather, fetching, dispatch }) => {
  useEffect(() => {
    // minic the mapDispatchToProps
    const onFetchDayWeather = async (woeid, date) => {
      dispatch(fetchDayWeather());
      try {
        const service = new MetaweatherService(woeid, date);
        const res = await service.get();
        const {data = []} = res;

        dispatch(fetchDayWeatherSuccess(data));
      } catch (e) {
        dispatch(fetchDayWeatherError(e));
      }
    }

    if (woeid) {
      onFetchDayWeather(woeid, date);
    }
  }, [woeid, date, dispatch]);

  let temperatureEle = null;
  if (!woeid) {
    temperatureEle = null;
  }
  else if (weather && !weather.length) {
    temperatureEle = <NotFound />;
  }
  else if (weather && weather.length) {
    // Apply the average rule for temperture
    const summary = weather.reduce((acc, item) => {
      const {max_temp, min_temp} = item;
      acc.max += max_temp;
      acc.min += min_temp;
      return acc;
    }, {max: 0, min: 0});
    const min = summary.min / weather.length;
    const max = summary.max / weather.length;
    temperatureEle = <Temperature min={min.toFixed(2)} max={max.toFixed(2)}/>
  }

  return <Card>
    <Card.Body className='text-center'>
      <p><b>{dayOfWeeks[date.getDay()]}</b></p>
      <br />
      {
        fetching ? <Fetching /> : temperatureEle
      }
    </Card.Body>
  </Card>;
}

export default withReducer(WeatherCard, reducer, initialState);
