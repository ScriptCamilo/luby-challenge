import { USER, USER_SUCCESS, USER_ERROR } from '../actions/user';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
}

function user(state = INITIAL_STATE, {type, payload}) {
  switch(type) {
    case USER:
      return {
        ...state,
        isLoading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default user;