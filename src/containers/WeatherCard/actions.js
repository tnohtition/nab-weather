import {
  FETCH_DAY_WEATHER,
  FETCH_DAY_WEATHER_SUCCESS,
  FETCH_DAY_WEATHER_ERROR,
} from './constants';

export const fetchDayWeather = () => ({ type: FETCH_DAY_WEATHER });
export const fetchDayWeatherSuccess = weather => ({ type: FETCH_DAY_WEATHER_SUCCESS, payload: {weather} });
export const fetchDayWeatherError = error => ({ type: FETCH_DAY_WEATHER_ERROR, error });
