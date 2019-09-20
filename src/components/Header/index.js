import React from 'react';

import { Notifications } from '~/components';

import {
  Container,
  Group,
  Item,
  Logo,
  NavLink,
  Profile,
  Avatar,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Group>
        <Item>
          <Logo />
        </Item>
        <Item>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Item>
      </Group>
      <Group>
        <Item>
          <Notifications />
        </Item>
        <Item>
          <Profile to="/profile">
            <Avatar
              src="https://api.adorable.io/avatars/40/abott@adorable.png"
              alt=""
            />
          </Profile>
        </Item>
      </Group>
    </Container>
  );
}
