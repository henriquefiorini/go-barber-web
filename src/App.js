import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Store, Persistor } from './store';
import History from './services/history';
import GlobalStyle from './styles';
import Routes from './routes';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Router history={History}>
          <GlobalStyle />
          <Routes />
          <ToastContainer autoClose={4000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
