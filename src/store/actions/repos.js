export const USER_REPOS = 'GET_USER_REPOS';
export const RESET_USER_REPOS = 'RESET_USER_REPOS';

export const getUserRepos = (payload) => ({
  type: USER_REPOS,
  payload,
});

export const resetRepos = () => ({
  type: RESET_USER_REPOS,
});
