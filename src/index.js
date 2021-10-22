import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persister } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Theme } from 'components';
import App from 'App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate loading={null} persistor={persister}>
        <Theme>
          <App />
        </Theme>
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);
