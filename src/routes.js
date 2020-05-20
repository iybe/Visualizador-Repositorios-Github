import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import principal from './pages/principal/index';
import repositorios from './pages/repositorios/index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={principal} />
        <Route path="/repositorios" exact component={repositorios} />
      </Switch>
    </BrowserRouter>
  );
}