import { getUserInfo, getUserApis } from '../../service/githubApi';
import { requestUser, userLogout, getUserSuccess, getUserError } from './user';
import { getUserRepos, resetRepos } from './repos';
import { getUserFollowers, resetFollowers } from './followers';
import { getUserFollowing, resetFollowing } from './following';

export const resetUser = () => (dispatch) => {
  dispatch(userLogout());
  dispatch(resetRepos());
  dispatch(resetFollowers());
  dispatch(resetFollowing());
}

export const getUserThunk = (userName) => async (dispatch) => {
  dispatch(requestUser());
  try {
    const data = await getUserInfo(userName);
    const repos = await getUserApis(userName, 'repos');
    const followers = await getUserApis(userName, 'followers');
    const following = await getUserApis(userName, 'following');
    
    dispatch(getUserRepos(repos));
    dispatch(getUserFollowers(followers));
    dispatch(getUserFollowing(following));
    dispatch(getUserSuccess(data));

  } catch (error) {
    console.log(error);
    dispatch(getUserError('Usuário não encontrado'));
  }
};