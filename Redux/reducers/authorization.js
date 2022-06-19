import {SET_AUTHENTICATED_TRUE, SET_LOADING_FALSE} from '../constants';

const initialState = {
  authenticated: false,
  loading: true,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED_TRUE:
      return {...state, authenticated: action.payload};
    case SET_LOADING_FALSE:
      return {...state, loading: action.payload};
    default:
      return state;
  }
}
