import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

function InfoCard({ children }) {
  return (
    <Container>
      <div />
      <section>
        {children}
      </section>
    </Container>
  );
}

export default InfoCard;
