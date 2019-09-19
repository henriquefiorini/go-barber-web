import produce from 'immer';

import { SIGN_IN_SUCCESS } from '../auth/actionTypes';

const initialState = {
  profile: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    }

    default: {
      return state;
    }
  }
}
