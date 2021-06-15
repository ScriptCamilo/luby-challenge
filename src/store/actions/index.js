import { getUserInfo, getUserApis } from '../../service/githubApi';
import { requestUser, getUserSuccess, getUserError } from './user';
import { getUserRepos } from './repos';
import { getUserFollowers } from './followers';
import { getUserFollowing } from './following';

const getUserThunk = (userName) => async (dispatch) => {
  try {
    dispatch(requestUser());
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

export default getUserThunk;