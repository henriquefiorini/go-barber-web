import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import AvatarInput from './components/AvatarInput';

import { Form, Input, Button } from '~/components';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" type="text" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your email address" />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Your current password"
        />
        <Input
          name="password"
          type="password"
          placeholder="Your new password"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
        />
        <Button type="submit">Update Profile</Button>
      </Form>
      <Button secondary type="button">
        Sign Out
      </Button>
    </Container>
  );
}
