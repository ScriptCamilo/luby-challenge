import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiLogIn, FiLogOut, FiArrowLeft } from 'react-icons/fi';

import { getUserThunk, resetUser } from '../../../../store/actions';

import Header from '../../../../components/Header';

function ProfileHeader({ username, avatarUrl, current }) {
  const dispatch = useDispatch();
  const { goBack } = useHistory();
  
  const iconSize = '1.5rem';
  
  return (
    <Header
      profile="true"
      back={`${current ? '' : 'true'}`}
    >
      {
        current ? <span>#{username}</span> 
        : (
          <div>
            <Link onClick={ goBack }>
              <FiArrowLeft size={iconSize} />
            </Link>
          </div>
        ) 
      }

      <figure>
        {current ? null : <span>#{username}</span>}
        <img src={avatarUrl} alt={username} />
      </figure>

      <div>
        {
          current ? (
            <Link onClick={() => dispatch(resetUser())}>
              <span>Sair</span>
              <FiLogOut size={iconSize} color="#D03434" />
            </Link>
          )
          : (
              <Link to="/" onClick={() => dispatch(getUserThunk(username))}>
                <span>Salvar</span>
                <FiLogIn size={iconSize} color="#5CBC29" />
              </Link>
            )
        }
      </div>
    </Header>
  );
}

export default ProfileHeader;