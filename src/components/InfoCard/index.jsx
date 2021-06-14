import React from 'react';

import { Container, Title, Description } from './styles';

function InfoCard() {
  return (
    <Container>
      <div />
      <section>
        <Title>User Name</Title>
        
        <Description as="p">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
        </Description>
      </section>
    </Container>
  );
}

export default InfoCard;
