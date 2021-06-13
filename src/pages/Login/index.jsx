import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi'

import { Container, Logo, UserName, Required, Button, LoginSection } from './styles';

function Login()  {
  const [userName, setUserName] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = ({target: { value }}, setState) => {
    setState(value)
    setIsEmpty(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName === '') {
      return setIsEmpty(true);
    }

    setIsEmpty(false);
  }

  return (
    <Container>
      <Logo />

      <LoginSection>
        <UserName isEmpty={isEmpty}>
          <input 
            value={userName} 
            onChange={(event) => handleChange(event, setUserName)}
            type='text'
            placeholder='Usuário'
          />
          {isEmpty ? <Required>Campo obrigatório</Required> : ''}
        </UserName>

        <Button as="button" onClick={handleSubmit}>
          <span>ENTRAR</span> <FiArrowRight />
        </Button>
      </LoginSection>
    </Container>
  )
}

export default Login;