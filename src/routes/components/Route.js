import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { AuthLayout, DefaultLayout } from '~/pages/_layouts';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const isAuthenticated = false;

  if (!isAuthenticated && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = isAuthenticated ? DefaultLayout : AuthLayout;
  return (
    <Route
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      {...rest}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
