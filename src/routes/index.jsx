import React from 'react';
import { FiHome, FiGithub, FiUsers } from 'react-icons/fi'
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Repos from '../pages/Repos';
import Followers from '../pages/Followers';
import Following from '../pages/Following';


import { Container, MainPage, NavBar, NavIcon } from './styles';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/repos",
    exact: true,
    component: Repos,
  },
  {
    path: "/followers",
    exact: true,
    component: Followers,
  },
  {
    path: "/following",
    exact: true,
    component: Following,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
];

function Routes() {
  return (
    <Container>
      <MainPage>
        <Switch>
          {routes.map((route, index) => <Route key={index}  { ...route } />)}
        </Switch>
      </MainPage>

      <NavBar> 
        <NavIcon to="/">
          <FiHome size='2rem' />
          <span>Home</span>
        </NavIcon>

        <NavIcon to="/repos">
          <FiGithub size='2rem' />
          <span>Repos</span>
        </NavIcon>

        <NavIcon to="/followers">
          <FiUsers size='2rem' />
          <span>Followers</span>
        </NavIcon>

        <NavIcon to="/following">
          <FiUsers size='2rem' />
          <span>Following</span>
        </NavIcon>
      </NavBar>
    </Container>
  )
}

export default Routes;