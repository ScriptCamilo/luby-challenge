import React from 'react';
import { FiStar, FiLock, FiUnlock } from 'react-icons/fi';

import InfoCard from '../../../../components/InfoCard';

import {
  Title,
  Description,
  AditionalInfo,
  Stars,
  Locks,
} from './styles';

function ReposCard({ repo: { name, description, stargazers_count } }) {
  const iconsSize = '1.3rem';

  return (
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
  );
}

export default ReposCard;