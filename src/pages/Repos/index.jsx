import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';

import { MainPage, Title, Description } from './styles';

function Repos() {
  const { repos } = useSelector(state => state);
  const reposCount = repos.length;

  return (
    <MainPage>
      <Header
        reposCount={reposCount}
      />
      
      {repos.map(({ name, description, stargazers_count}) => (
        <InfoCard>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <hr />
        </InfoCard>
      ))}
    </MainPage>
  );
}

export default Repos;
