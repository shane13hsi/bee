import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './pages/App/AppContainer';

export default (
  <Route handler={App} name='app' path='/'>
  </Route>
);
