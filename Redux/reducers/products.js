const {FETCH_PRODUCTS} = require('../constants');
const initialState = [];

export default function productsReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return payload;
    default:
      return state;
  }
}
