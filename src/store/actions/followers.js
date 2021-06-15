export const USER_FOLLOWERS = 'GET_USER_FOLLOWERS';

export const getUserFollowers = (payload) => ({
  type: USER_FOLLOWERS,
  payload,
});