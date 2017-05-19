
import * as types from './types';
import Api from '../lib/api';

export function login(username, password) {
  return (dispatch, getState) => {

    const data = {
      username:username,
      password:password
    };

    return Api.post('/login/', data).then( resp => {
      dispatch(alertAuthenticated);
    }).catch(err => {
      console.log(err);
    })
  }
}

export function alertAuthenticated() {
  return {
    type: types.IS_AUTHENTICATED
  }
}