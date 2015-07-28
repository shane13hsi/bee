import React from 'react';
import { Route, Redirect } from 'react-router';
import Body from './components/Body';

export default (
  <Route handler={Body} name='body' path='/'>
  </Route>
);
