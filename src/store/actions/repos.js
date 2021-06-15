export const USER_REPOS = 'GET_USER_REPOS';

export const getUserRepos = (payload) => ({
  type: USER_REPOS,
  payload,
});