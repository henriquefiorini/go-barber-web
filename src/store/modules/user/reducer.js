import produce from 'immer';

import { SIGN_IN_SUCCESS } from '../auth/actionTypes';
import { UPDATE_PROFILE_SUCCESS } from './actionTypes';

const initialState = {
  profile: null,
};

export default function user(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }
      case UPDATE_PROFILE_SUCCESS: {
        draft.profile = action.payload.profile;
        break;
      }
      default: {
        break;
      }
    }
  });
}
