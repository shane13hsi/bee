import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import configureStore from './store/configureStore';
import App from './containers/App';

const history = createHashHistory();
const store = configureStore();

React.render(
  <div>
    <Provider store={store}>
      {() =>
        <Router history={history}>
          <Route component={App} path='/'/>
        </Router>
      }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor}/>
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
