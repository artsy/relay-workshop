import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Exercise0 } from './exercises/00-Relay-Compiler/Exercise0';
import { Exercise1 } from './exercises/01-Query-Renderer/Exercise1';
import { Exercise2 } from './exercises/02-Fragment-Container/Exercise2';
import { Exercise3 } from './exercises/03-Testing-Queries/Exercise3';
import Home from './Home';
import Nav from './Nav';

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
};

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/exercise-0">
        <Exercise0 />
      </Route>
      <Route path="/exercise-1">
        <Exercise1 />
      </Route>
      <Route path="/exercise-2">
        <Exercise2 />
      </Route>
      <Route path="/exercise-3">
        <Exercise3 />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </>
  );
};

export default App;
