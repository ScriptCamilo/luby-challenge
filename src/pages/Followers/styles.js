import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  color: white;

  font-family: 'Roboto', sans-serif;

  padding-bottom: 20%;
`;

export const Image = styled.figure`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;

  img {
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
    border: 3px solid white;
  }
`;

export const Log = styled(Link).attrs(({ justifycontent }) => ({
  to: '/followers/:login',
}))`
  display: flex;
  justify-content: space-between;

  width: 70%;

  span {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

export const Line = styled.hr`
  border-top: 1px solid #7070705A;
  border-bottom: none;
`;
