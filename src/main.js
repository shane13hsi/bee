import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import configureStore from './store/configureStore';
import App from './pages/App/AppContainer';

const history = createHashHistory();
const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route component={App} path='/'/>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);


