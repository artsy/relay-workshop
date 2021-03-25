import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Exercise } from '../Exercise';
import { Artist2AuctionResultsQueryRenderer } from './Artist2AuctionResultsQueryRenderer';

import { Artist2BioQueryRenderer } from './Artist2BioQueryRenderer';

export const Exercise2 = () => {
  return (
    <Exercise number={2} name="QueryRenderer">
      <Switch>
        <Route path="/exercise-2" exact>
          <>
            <Tabs />
            <Artist2BioQueryRenderer />
          </>
        </Route>
        <Route path="/exercise-2/auction-results">
          <>
            <Tabs />
            <Artist2AuctionResultsQueryRenderer />
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
        <Link to="/exercise-2/auction-results">Auction Results</Link>
      </li>
    </ul>
  );
};
