import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Countries from './containers/Countries.js';
import Country from './containers/Country.js';
import NavBar from './components/NavBar';

const Main = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Countries" exact component={Countries} />
        <Route path="/Country/:id" exact component={Country} />
        <Route path="/Help" exact component={Help} />
        <Route path="/Sources" exact component={Sources} />
        <Route path="/About" exact component={About} />
      </Switch>
    </div>
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
