// ./phone_list_app/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Phone from './containers/Phone';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Phone} />
  </Route>
)