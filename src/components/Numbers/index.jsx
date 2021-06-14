import React from 'react';

import { 
  Container,
  Followers,
  Following,
  Repos,
 } from './styles';

function Numbers() {
  return (
    <Container>
      <Followers>
        <h2>32</h2>
        <span>Seguidores</span>
      </Followers>
      
      <Following>
        <h2>32</h2>
        <span>Seguindo</span>
      </Following>

      <Repos>
        <h2>10</h2>
        <span>Repos</span>
      </Repos>
    </Container>
  );
}

export default Numbers;