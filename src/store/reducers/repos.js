import { GET_USER_REPOS } from '../actions';

const INITIAL_STATE = []

function repos(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case 'GET_USER_REPOS': {
      const newState = state.concat(payload);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default repos;