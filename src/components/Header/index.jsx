import React from 'react';
import { FiLogOut, FiLogIn, FiArrowLeft } from 'react-icons/fi';

import { Container, Log, Image } from './styles';

function Header({ username, avatar_url }) {
  return (
    <Container>
      <section>
        <span>#{username}</span>
        
        <Log>
          <span>Sair</span>
          <FiLogOut size={'1.5rem'} color="#D03434" />
        </Log>
      </section>

      <Image>
        <img src={avatar_url} alt={username} />
      </Image>
    </Container>
  )
}

export default Header;