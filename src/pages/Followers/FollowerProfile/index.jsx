import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserInfo } from '../../../service/githubApi';

import { MainPage } from './styles';

import UserProfile from '../../../components/UserProfile';
import Loading from '../../../components/Loading';

function FollowerProfile() {
  const [userStatus, setUserStatus] = useState({isLoading: true, userInfo: {}})
  const { login } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setUserStatus({isLoading: true, userInfo: {}});
        const userInfo = await getUserInfo(login);
        setUserStatus({isLoading: false, userInfo})
        
      } catch (error) {
        console.log(error);
      }
    }

    fetchApi();
  }, [login]);
  
  if (userStatus.isLoading) return <Loading />

  return (
    <MainPage>
      <UserProfile userInfo={ userStatus.userInfo } />
    </MainPage>
  );
}

export default FollowerProfile;
