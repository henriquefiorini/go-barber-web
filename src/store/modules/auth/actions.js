import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, AUTH_FAILURE } from './actionTypes';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(token, user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      token,
      user,
    },
  };
}

export function authFailure() {
  return {
    type: AUTH_FAILURE,
  };
}
