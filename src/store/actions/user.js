export const USER = 'REQUEST_USER';
export const USER_LOGIN = 'RECEIVED_USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_ERROR = 'RECEIVED_USER_ERROR';

export const requestUser = () => ({
  type: USER,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const getUserSuccess = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const getUserError = (payload) => ({
  type: USER_ERROR,
  payload,
});
