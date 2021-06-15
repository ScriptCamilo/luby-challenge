import React from 'react';

import { Container } from './styles';

function InfoCard({ children, alignItems }) {
  return (
    <Container alignItems={alignItems} >
      <div />
      <section>
        {children}
      </section>
    </Container>
  );
}

export default InfoCard;
