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
    dispatch(getUserSuccess(data));
    
    const repos = await getUserApis(userName, 'repos');
    dispatch(getUserRepos(repos));

    const followers = await getUserApis(userName, 'followers');
    dispatch(getUserFollowers(followers));

    const following = await getUserApis(userName, 'following');
    dispatch(getUserFollowing(following));

  } catch (error) {
    console.log(error);
    dispatch(getUserError('Usuário não encontrado'));
  }
};