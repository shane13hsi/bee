import 'babel-core/polyfill';
import React from 'react';
import { Router, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import App from './pages/App/AppPage';

React.render(
  <Router history={createHashHistory()}>
    <Route component={App} path='/'/>
  </Router>,
  document.body
);
