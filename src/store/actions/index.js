import { getUserInfo, getUserApis } from '../../service/githubApi';

const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_ERROR = 'GET_USER_ERROR';

const GET_USER_REPOS = 'GET_USER_REPOS';
const GET_USER_FOLLOWERS = 'GET_USER_FOLLOWERS';
const GET_USER_FOLLOWING = 'GET_USER_FOLLOWING ';

const getUser = () => ({
  type: GET_USER,
});

const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

const getUserError = (payload) => ({
  type: GET_USER_ERROR,
  payload,
});

const getUserRepos = (payload) => ({
  type: GET_USER_REPOS,
  payload,
});

const getUserFollowers = (payload) => ({
  type: GET_USER_FOLLOWERS,
  payload,
});

const getUserFollowing = (payload) => ({
  type: GET_USER_FOLLOWING,
  payload,
});

const getUserThunk = (user) => async (dispatch) => {
  try {
    dispatch(getUser());
    const data = await getUserInfo(user);
    dispatch(getUserSuccess(data));
    
    const repos = await getUserApis(data.repos_url);
    dispatch(getUserRepos(repos));

  } catch (error) {
    console.log(error);
    dispatch(getUserError('Usuário não encontrado'));
  }
};

export default getUserThunk;