import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '~/components';

import { Wrapper } from './styles';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default DefaultLayout;
