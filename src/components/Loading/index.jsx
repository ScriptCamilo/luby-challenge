import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';

import { Container, Animation } from './styles';

function Loading() {
  return (
    <Container>
      <Animation>
        <FaGithubAlt color="#FFCE00" size="4rem"/>
      </Animation>
      <h2>LOADING...</h2>
    </Container>
  );
}

export default Loading;
