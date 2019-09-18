import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input, Button } from '~/components';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Sign In</Button>
      </Form>
      <Link to="/register">Create an account</Link>
    </>
  );
}

export default SignIn;
