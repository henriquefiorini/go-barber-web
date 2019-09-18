import React from 'react';
import { Router } from 'react-router-dom';

import History from './services/history';
import GlobalStyle from './styles';
import Routes from './routes';

function App() {
  return (
    <Router history={History}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
