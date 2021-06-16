import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiLogOut, FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../components/Header';

function ProfileHeader({ username, avatarUrl, current }) {
  const iconSize = '1.5rem';
  return (
    <Header
      profile="true"
      back={`${current ? '' : 'true'}`}
    >
      {
        current ? <span>#{username}</span> 
        : (
          <Link>
              <FiArrowLeft size={iconSize} />
          </Link>
        ) 
      }

      <figure>
        {current ? null : <span>#{username}</span>}
        <img src={avatarUrl} alt={username} />
      </figure>

      <Link>
        {
          current ? (
            <>
              <span>Sair</span>
              <FiLogOut size={iconSize} color="#D03434" />
            </>
          )
          : (
              <>
                <span>Salvar</span>
                <FiLogIn size={iconSize} color="#5CBC29" />
              </>
            )
        }
      </Link>
    </Header>
  );
}

export default ProfileHeader;