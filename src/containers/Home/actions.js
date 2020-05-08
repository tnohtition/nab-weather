import {
  FETCH_LOCATION,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_ERROR,
} from './constants';

export const fetchLocation = () => ({ type: FETCH_LOCATION });
export const fetchLocationSuccess = location => ({ type: FETCH_LOCATION_SUCCESS, payload: {location} });
export const fetchLocationError = error => ({ type: FETCH_LOCATION_ERROR, error });
