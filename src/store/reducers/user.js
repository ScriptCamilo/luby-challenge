const INITIAL_STATE = {
  isLoading: false,
  error: null,
}

function user(state = INITIAL_STATE, {type, payload}) {
  switch(type) {
    case 'GET_USER':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case 'GET_USER_ERROR':
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