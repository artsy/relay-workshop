import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Exercise0 } from './exercises/0-Relay-Compiler/Exercise0';
import { Exercise1 } from './exercises/01-Query-Renderer/Exercise1';
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
      <Route path="/" exact>
        <Home />
      </Route>
    </>
  );
};

export default App;
