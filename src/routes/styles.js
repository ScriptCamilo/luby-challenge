import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  color: white;

  height: 90%;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white;

  border-radius: 20px 20px 0 0;

  height: 10%;
`;

export const NavIcon = styled(NavLink).attrs(() => ({
  exact: true,
  activeStyle: {
    color: '#3E3E3E',
  }
}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  color: #A5A5A5;

  span {
    margin-top: 5px;
  }
`;
