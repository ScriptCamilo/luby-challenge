import { USER_REPOS, RESET_USER_REPOS } from '../actions/repos';

const INITIAL_STATE = []

function repos(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case USER_REPOS: 
      return payload;
    case RESET_USER_REPOS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default repos;