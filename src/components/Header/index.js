import React from 'react';

import {
  Container,
  Group,
  Logo,
  Navigation,
  NavLink,
  Profile,
  Avatar,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Group>
        <Logo />
        <Navigation>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Navigation>
      </Group>
      <Group>
        <Profile to="/profile">
          <Avatar
            src="https://api.adorable.io/avatars/40/abott@adorable.png"
            alt=""
          />
        </Profile>
      </Group>
    </Container>
  );
}
