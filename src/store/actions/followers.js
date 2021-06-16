export const USER_FOLLOWERS = 'GET_USER_FOLLOWERS';
export const RESET_USER_FOLLOWERS = 'RESET_USER_FOLLOWERS';

export const getUserFollowers = (payload) => ({
  type: USER_FOLLOWERS,
  payload,
});

export const resetFollowers = () => ({
  type: RESET_USER_FOLLOWERS,
})
