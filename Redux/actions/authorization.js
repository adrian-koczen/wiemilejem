import {SET_AUTHENTICATED_TRUE, SET_LOADING_FALSE} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// ENV
import {API_HOST} from '@env';

export const setAuthenticatedTrue = async (token, dispatch) => {
  await AsyncStorage.setItem('authToken', token).then(() => {
    dispatch({
      type: SET_AUTHENTICATED_TRUE,
      payload: {authenticated: true},
    });
  });
};

export const verifyToken = token => async dispatch => {
  await axios.post(`${API_HOST}/api/verifyToken`, {token: token}).then(() => {
    dispatch({
      type: SET_AUTHENTICATED_TRUE,
      payload: true,
    });
  });
};

export const setLoadingToFalse = () => dispatch => {
  dispatch({
    type: SET_LOADING_FALSE,
    payload: false,
  });
};
