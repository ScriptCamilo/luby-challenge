import { USER_REPOS } from '../actions/repos';

const INITIAL_STATE = []

function repos(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case USER_REPOS: 
      return payload;
    default:
      return state;
  }
}

export default repos;