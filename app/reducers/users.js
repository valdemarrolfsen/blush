import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const is_authenticated = createReducer([], {
  [types.IS_AUTHENTICATED](state, action) {
    return true;
  }
});