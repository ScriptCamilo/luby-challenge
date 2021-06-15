import { GET_USER_FOLLOWERS } from '../actions';

const INITIAL_STATE = []

function followers(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEW_USER': {
      return action.payload.user;
    }
    default: {
      return state;
    }
  }
}

export default followers;