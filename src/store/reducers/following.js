import { GET_USER_FOLLOWING } from '../actions';

const INITIAL_STATE = [];

function following(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEW_USER': {
      return action.payload.user;
    }
    default: {
      return state;
    }
  }
}

export default following;