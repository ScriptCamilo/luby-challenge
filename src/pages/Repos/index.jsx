import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import ReposCard from './components/ReposCard'

import {
  MainPage,
  Line,
} from './styles';

function Repos() {
  const { user: { public_repos }, repos } = useSelector(state => state);
  const reposCount = repos.length;

  return (
    <MainPage>
      <Header
        local="Repositórios"
        count={public_repos}
      />
      
      {
        repos.map((repo, index) => (
          <>
            <ReposCard key={repo.name} repo={ repo } />
            {index + 1 === reposCount ? null : <Line key={index} />}
          </>
        ))
      }
    </MainPage>
  );
}

export default Repos;
