const INITIAL_STATE = []

function repos(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case 'GET_USER_REPOS': 
      return payload;
    default:
      return state;
  }
}

export default repos;