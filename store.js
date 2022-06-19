import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// Reducers
import authorization from './Redux/reducers/authorization';
import products from './Redux/reducers/products';
import singleProduct from './Redux/reducers/singleProduct';

const middlewares = [thunk];

const createDebugger = require('redux-flipper').default;
middlewares.push(createDebugger());

const rootReducer = combineReducers({authorization, products, singleProduct});
const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(...middlewares)));
};
export default configureStore;
