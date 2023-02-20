import { combineReducers } from 'redux';
import product from './product';
import products from './products';

const rootReducer = combineReducers({
  product,
  products,
});

export default rootReducer;
