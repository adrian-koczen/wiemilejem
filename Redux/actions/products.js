const {
  FETCH_PRODUCTS,
  SET_PRODUCT,
  SET_WEIGHT_OPTION,
} = require('../constants');

export const fetchProducts = products => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  });
};

export const clearProducts = () => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: [],
  });
};

export const setProduct = product => async dispatch => {
  dispatch({
    type: SET_PRODUCT,
    payload: product,
  });
};

export const setWeightOption = weightID => async dispatch => {
  dispatch({
    type: SET_WEIGHT_OPTION,
    payload: weightID,
  });
};
