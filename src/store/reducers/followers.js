import { USER_FOLLOWERS } from '../actions/followers';

const INITIAL_STATE = []

function followers(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case USER_FOLLOWERS:
      return payload
    default:
      return state;
  }
}

export default followers;