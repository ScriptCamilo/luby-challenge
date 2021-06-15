import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 2rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;

  background-color: #1F1F1F;

  height: 6.5rem;

  padding: 1.1rem;

  section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  & span {
    font-weight: 700;
  }
`;

export const Log = styled(Link).attrs(() => ({
  to: '/login',
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 10px;
    font-weight: 300;
  }
`;

export const Image = styled.figure`    
  img {
    height: 7rem;
    width: 7rem;
    border-radius: 100%;
    border: 3px solid white;
  }
`;