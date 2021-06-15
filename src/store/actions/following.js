export const USER_FOLLOWING = 'GET_USER_FOLLOWING ';

export const getUserFollowing = (payload) => ({
  type: USER_FOLLOWING,
  payload,
});