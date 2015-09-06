import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import configureStore from './store/configureStore';
import App from './containers/App';

const history = createHashHistory();
const store = configureStore();

if (process.env.NODE_ENV === 'development') {
  const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
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
} else {
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
}


