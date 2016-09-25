import { combineReducers } from 'redux';
import getDataReducer from '../shopify/reducer';


const rootReducer = combineReducers([
  getDataReducer
])

export default rootReducer;
