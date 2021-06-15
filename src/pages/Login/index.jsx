import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiArrowRight } from 'react-icons/fi';
import getUserThunk from '../../store/actions';

import { Container, Logo, UserName, Required, Button, LoginSection } from './styles';

function Login()  {
  const [userName, setUserName] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = ({target: { value }}) => {
    setUserName(value)
    setIsEmpty(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName === '') {
      return setIsEmpty(true);
    }
    setUserName('');
    dispatch(getUserThunk(userName));
    history.push('/');
  }

  return (
    <Container>
      <Logo />

      <LoginSection>
        <UserName isEmpty={isEmpty}>
          <input 
            value={userName} 
            onChange={(event) => handleChange(event)}
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