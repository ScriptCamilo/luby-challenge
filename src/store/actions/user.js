export const USER = 'REQUEST_USER';
export const USER_SUCCESS = 'RECEIVED_USER_SUCCESS';
export const USER_ERROR = 'RECEIVED_USER_ERROR';

export const requestUser = () => ({
  type: USER,
});

export const getUserSuccess = (payload) => ({
  type: USER_SUCCESS,
  payload,
});

export const getUserError = (payload) => ({
  type: USER_ERROR,
  payload,
});
