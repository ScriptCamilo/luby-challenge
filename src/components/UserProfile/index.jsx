import React from 'react';
import { FiMail, FiMapPin, FiBriefcase } from 'react-icons/fi';

import ProfileHeader from './components/ProfileHeader';

import InfoCard from '../InfoCard';
import Numbers from '../Numbers';

import { Title, Description } from './styles';

function UserProfile({ userInfo, current }) {
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
  } = userInfo;


  return (
    <>
      <ProfileHeader 
        username={login}
        avatarUrl={avatar_url}
        current={current}
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
    </>
  );
}

export default UserProfile;
