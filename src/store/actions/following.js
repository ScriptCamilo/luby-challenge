export const USER_FOLLOWING = 'GET_USER_FOLLOWING ';
export const RESET_USER_FOLLOWING = 'RESET_USER_FOLLOWING';

export const getUserFollowing = (payload) => ({
  type: USER_FOLLOWING,
  payload,
});

export const resetFollowing = () => ({
  type: RESET_USER_FOLLOWING,
});
