import React from 'react';
import {Route} from 'react-router';
import App from './pages/App/AppPage';

export default (
  <Route handler={App} name='app' path='/'>
  </Route>
);
