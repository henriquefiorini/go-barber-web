import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from './actionTypes';
import { signInSuccess, authFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function setAuthorizationHeader({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    if (!user.provider) {
      toast.error(
        'If you are not a provider, please sign in with our mobile app.'
      );
      yield put(authFailure());
      return;
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Authentication failed, please check your credentials.');
    yield put(authFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
    history.push('/');
  } catch (err) {
    toast.error('Something went wrong, please try again.');
    yield put(authFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setAuthorizationHeader),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
]);
