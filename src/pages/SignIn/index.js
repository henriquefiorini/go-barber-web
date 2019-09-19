import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input, Button } from '~/components';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

function SignIn() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Connecting...' : 'Sign In'}
        </Button>
      </Form>
      <Link to="/register">Create an account</Link>
    </>
  );
}

export default SignIn;
