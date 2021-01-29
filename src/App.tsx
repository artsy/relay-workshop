import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Exercise0 from './exercises/0-Relay-Compiler/Exercise0';
import Home from './Home';
import Nav from './Nav';

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/exercise-0">
          <Exercise0 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
