import React from 'react';

import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import Numbers from '../../components/Numbers';

import { MainPage } from './styles';

function Home() {
  return (
    <MainPage>
      <Header />
      <InfoCard />
      <Numbers />
      <InfoCard />
    </MainPage>
  );
}

export default Home;
