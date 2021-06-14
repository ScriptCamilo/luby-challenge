import React from 'react';
import { FiLogOut, FiLogIn, FiArrowLeft } from 'react-icons/fi';

import { Header, Log, Image } from './styles';

function User() {
  return (
    <Header>
      <section>
        <span>#ScriptCamilo</span>
        
        <Log>
          <span>Sair</span>
          <FiLogOut size={'1.5rem'} color="#D03434" />
        </Log>
      </section>

      <Image>
        <img src="https://avatars.githubusercontent.com/u/43912333?v=4"/>
      </Image>
    </Header>
  )
}

export default User;