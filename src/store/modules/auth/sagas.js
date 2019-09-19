import { call, put, all, takeLatest } from 'redux-saga/effects';

import { SIGN_IN_REQUEST } from './actionTypes';
import { signInSuccess, authFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    if (!user.provider) {
      return;
    }

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    yield put(authFailure());
  }
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
