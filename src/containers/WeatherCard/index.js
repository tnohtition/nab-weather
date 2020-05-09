import React, {useEffect, useReducer} from 'react';
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

const WeatherCard = ({date, woeid}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const reqDayWeather = async (woeid, date) => {
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
      reqDayWeather(woeid, date);
    }
  }, [woeid, date]);

  const {weather, fetching} = state;
  let temperatureEle = null;
  if (!woeid) {
    temperatureEle = null;
  }
  else if (weather && !weather.length) {
    temperatureEle = <NotFound />;
  }
  else if (weather && weather.length) {
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

export default WeatherCard;
