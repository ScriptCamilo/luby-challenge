import React from 'react';
import { useSelector } from 'react-redux';
import { FiArrowRight } from 'react-icons/fi';

import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';

import {
  MainPage,
  Log,
  Image,
  Line,
} from './styles';

function Following() {
  const { user: { following: followingTotal }, following } = useSelector((state) => state);
  const followingCount = following.length;

  return (
    <MainPage>
      <Header
        local="Seguidores"
        count={followingTotal}
      />

      {following.map(({ login, avatar_url }, index) => (
        <>
          <InfoCard alignItems="center">
            <Image>
              <img src={avatar_url} alt={login} />
              <Log to={`following/${login}`}>
                <span>#{login}</span>
                <FiArrowRight size="1.5rem" />
              </Log>
            </Image>
          </InfoCard>

          {index + 1 === followingCount ? null : <Line />}
        </>
      ))}
    </MainPage>
  );
}

export default Following;
