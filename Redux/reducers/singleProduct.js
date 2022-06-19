const {SET_PRODUCT, SET_WEIGHT_OPTION} = require('../constants');
const initialState = {selectedOption: 1};

export default function singleProductReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_PRODUCT:
      return {...state, ...payload};
    case SET_WEIGHT_OPTION:
      return {...state, selectedOption: payload};
    default:
      return state;
  }
}
