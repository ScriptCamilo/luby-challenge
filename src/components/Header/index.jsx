import React from 'react';
import { FiLogOut, FiLogIn, FiArrowLeft } from 'react-icons/fi';

import { Container, Log, Image } from './styles';

function Header({ username, avatarUrl, count, back, profile, local }) {
  const styleProps = {profile, back}

  return (
    <Container {...styleProps}>
      {
        profile ? (
          <>
            {
              back ? (
                <Log justifycontent="flex-start" >
                  <FiArrowLeft size={'1.5rem'} />
                </Log>
              ) 
              : <span>#{username}</span>
            }

            <Image {...styleProps} >
              {back ? <span>#{username}</span> : null}
              <img src={avatarUrl} alt={username} />
            </Image>

            {
              back ? (
                <Log>
                  <span>Salvar</span>
                  <FiLogOut size={'1.5rem'} color="#5CBC29 " />
                </Log>
              )
              : (
                <Log>
                  <span>Sair</span>
                  <FiLogIn size={'1.5rem'} color="#D03434" />
                </Log>
              )
            }
          </>
        ) 
        : (
          <>
            <Log justifycontent="flex-start">
              <FiArrowLeft size={'1.5rem'} />
            </Log>
            
            <span>{count} {local}</span>
            
            <div />
          </>
        )
      }
    </Container>
  )
}

export default Header;