import { USER_FOLLOWING } from '../actions/following';

const INITIAL_STATE = [];

function following(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case USER_FOLLOWING:
      return payload;
    default:
      return state;
  }
}

export default following;