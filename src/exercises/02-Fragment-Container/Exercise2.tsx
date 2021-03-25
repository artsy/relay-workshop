import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Exercise } from '../Exercise';
export const Exercise2 = () => {
  return (
    <Exercise number={1} name="QueryRenderer">
      <Switch>
        <Route path="/exercise-2" exact>
          <>
            <Tabs />
          </>
        </Route>
        <Route path="/exercise-2/artwork">
          <>
            <Tabs />
          </>
        </Route>
      </Switch>
    </Exercise>
  );
};

const Tabs = () => {
  return (
    <ul>
      <li>
        <Link to="/exercise-2">Bio</Link>
      </li>
      <li>
        <Link to="/exercise-2/artwork">Artwork</Link>
      </li>
    </ul>
  );
};
