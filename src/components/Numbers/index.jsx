import React from 'react';

import { 
  Container,
  Followers,
  Following,
  Repos,
 } from './styles';

function Numbers({ followers, following, repos }) {

  return (
    <Container>
      <Followers>
        <h2>{followers}</h2>
        <span>Seguidores</span>
      </Followers>
      
      <Following>
        <h2>{following}</h2>
        <span>Seguindo</span>
      </Following>

      <Repos>
        <h2>{repos}</h2>
        <span>Repos</span>
      </Repos>
    </Container>
  );
}

export default Numbers;