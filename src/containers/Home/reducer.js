import {
  FETCH_LOCATION,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_ERROR
} from './constants';

export const initialState = {
  fetching: false,
  location: null,
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  const {type} = action;
  switch (type) {
    case FETCH_LOCATION:
      return { ...state, fetching: true };
    case FETCH_LOCATION_SUCCESS:
      return { ...state, fetching: false, location: action.payload.location };
    case FETCH_LOCATION_ERROR:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
