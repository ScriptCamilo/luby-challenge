import React from 'react';
import { useSelector } from 'react-redux';
import { FiStar, FiLock, FiUnlock } from 'react-icons/fi';

import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';

import {
  MainPage,
  Title,
  Description,
  AditionalInfo,
  Stars,
  Locks,
  Line,
} from './styles';

function Repos() {
  const { user: { public_repos }, repos } = useSelector(state => state);
  const reposCount = repos.length;
  const iconsSize = '1.3rem';

  return (
    <MainPage>
      <Header
        local="Repositórios"
        count={public_repos}
      />
      
      {repos.map(({ name, description, stargazers_count}, index) => (
        <>
          <InfoCard>
            <Title>{name}</Title>
            <Description>{description}</Description>

            <AditionalInfo>
              <Stars>
                <FiStar color={'#FFCE00'} size={iconsSize} style={{marginRight: '0.5rem'}}/>
                {stargazers_count}
              </Stars>

              <Locks>
                <FiUnlock color={'#63BF1F'} size={iconsSize} style={{marginRight: '1rem'}}/>
                <FiLock color={'#CC042A'} size={iconsSize}/>
              </Locks>
            </AditionalInfo>
          </InfoCard>

          {index + 1 === reposCount ? null : <Line />}
        </>
      ))}
    </MainPage>
  );
}

export default Repos;
