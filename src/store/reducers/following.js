import { USER_FOLLOWING, RESET_USER_FOLLOWING,  } from '../actions/following';

const INITIAL_STATE = [];

function following(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case USER_FOLLOWING:
      return payload;
    case RESET_USER_FOLLOWING:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default following;