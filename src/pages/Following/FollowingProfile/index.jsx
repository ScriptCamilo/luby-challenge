import React from 'react';
import { useSelector } from 'react-redux';
import { FiMail, FiMapPin, FiBriefcase } from 'react-icons/fi';

// import HomeHeader from './components/HomeHeader';

import InfoCard from '../../../components/InfoCard';
import Numbers from '../../../components/Numbers';

import { MainPage, Title, Description } from './styles';

function FollowingProfile() {
  const { 
    login,
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    email,
    location,
    company,
  } = useSelector(({user}) => user);


  return (
    <MainPage>
      <HomeHeader 
        username={login}
        avatarUrl={avatar_url}
      />

      <InfoCard>
        <Title>{name}</Title>
        {email ? <Description> <FiMail /> <span>{email}</span></Description> : null}
        {location ? <Description> <FiMapPin /> <span>{location}</span></Description> : null}
        {company ? <Description> <FiBriefcase /> <span>{company}</span></Description> : null}
      </InfoCard>

      <Numbers
        followers={followers}
        following={following}
        repos={public_repos}
      />

      <InfoCard>
        <Title>BIO</Title>
        <Description>{bio}</Description>
      </InfoCard>
    </MainPage>
  );
}

export default FollowingProfile;
