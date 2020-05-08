import {
  FETCH_DAY_WEATHER,
  FETCH_DAY_WEATHER_SUCCESS,
  FETCH_DAY_WEATHER_ERROR
} from './constants';

export const initialState = {
  fetching: false,
  weather: null,
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  const {type} = action;
  switch (type) {
    case FETCH_DAY_WEATHER:
      return { ...state, fetching: true };
    case FETCH_DAY_WEATHER_SUCCESS:
      return { ...state, fetching: false, weather: action.payload.weather };
    case FETCH_DAY_WEATHER_ERROR:
      return { ...state, fetching: false, error: action.error, weather: [] };
    default:
      return state;
  }
};

export default reducer;
