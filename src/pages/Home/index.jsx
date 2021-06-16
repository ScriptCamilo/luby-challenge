import React from 'react';
import { useSelector } from 'react-redux';

import { MainPage } from './styles';
import UserProfile from '../../components/UserProfile';

function Home() {
  const userInfo = useSelector(({user}) => user);

  return (
    <MainPage>
      <UserProfile userInfo={userInfo} current />
    </MainPage>
  );
}

export default Home;
