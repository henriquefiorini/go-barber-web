import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Store from './store';
import History from './services/history';
import GlobalStyle from './styles';
import Routes from './routes';

function App() {
  return (
    <Provider store={Store}>
      <Router history={History}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
