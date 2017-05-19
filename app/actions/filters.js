
import * as types from './types';

export function toggleFilter() {
  return (dispatch, getState) => {
    dispatch(doToggle());
  };
}

export function doToggle() {
  return {
    type: types.FILTER_TOGGLE
  }
}