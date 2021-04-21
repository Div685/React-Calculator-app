import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import NavBar from './NavBar';
import Quote from './Quote';

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
