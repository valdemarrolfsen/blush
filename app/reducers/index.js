import {combineReducers} from 'redux';
import * as userReducers from './users';
import * as filterReducers from './filters';

export default combineReducers(Object.assign(
  userReducers,
  filterReducers
));