import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input, Button } from '~/components';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'Your password must have at least 6 characters.')
    .required('Password is required.'),
});

function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Create Account</Button>
      </Form>
      <Link to="/">Already have an account? Sign in.</Link>
    </>
  );
}

export default SignUp;
