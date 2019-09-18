import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Logo } from './styles';

function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Container>
        <Logo src="" alt="GoBarber" />
        {children}
      </Container>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default AuthLayout;
