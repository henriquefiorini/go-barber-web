import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn, SignUp, Dashboard, Profile } from '../pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
