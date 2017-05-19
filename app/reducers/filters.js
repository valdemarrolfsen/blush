import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const filterOpen = createReducer(false, {
  [types.FILTER_TOGGLE](state, action) {
    return !state;
  }
});