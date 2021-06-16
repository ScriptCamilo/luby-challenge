import React from 'react';
import { useSelector } from 'react-redux';
import { FiHome, FiGithub, FiUsers } from 'react-icons/fi'
import { Route, Switch } from 'react-router-dom';

import Loading from '../components/Loading';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Repos from '../pages/Repos';
import Followers from '../pages/Followers';
import FollowersProfile from '../pages/Followers/FollowerProfile';
import Following from '../pages/Following';
import FollowingProfile from '../pages/Following/FollowingProfile';


import { Container, NavBar, NavIcon } from './styles';

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
    path: "/followers/:login",
    exact: true,
    component: FollowersProfile,
  },
  {
    path: "/following",
    exact: true,
    component: Following,
  },
  {
    path: "/following/:login",
    exact: true,
    component: FollowingProfile,
  },
];

function Routes() {
  const { user: { isLoading, auth }} = useSelector((state) => state);

  if (!auth) return <Login />;

  if(isLoading) return <Loading />

  return (
    <Container>
      <Switch>
        {routes.map((route, index) => <Route key={index}  { ...route } />)}
      </Switch>

      <NavBar> 
        <NavIcon exact to="/">
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