import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import Header from '../../../../components/Header';

function HomeHeader({ username, avatarUrl }) {
  return (
    <Header
      profile="true"
    >
      <span>#{username}</span>

      <figure>
        <img src={avatarUrl} alt={username} />
      </figure>

      <Link>
        <span>Sair</span>
        <FiLogIn size={'1.5rem'} color="#D03434" />
      </Link>
    </Header>
  );
}

export default HomeHeader;