import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './components/Route';

import { SignIn, SignUp, Dashboard, Profile } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
