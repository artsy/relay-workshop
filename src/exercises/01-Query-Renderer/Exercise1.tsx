import React from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import { Exercise } from '../Exercise';

export const Exercise1 = () => {
  return (
    <Exercise number={1} name="QueryRenderer">
      <Switch>
        <Route path="/exercise-1/artist/:artistID">
          <>
            <Link to="/exercise-1">&lt; Back</Link>
            <Artist />
          </>
        </Route>
        <Route path="/exercise-1/" exact>
          <ArtistList />
        </Route>
      </Switch>
    </Exercise>
  );
};

const ArtistList = () => {
  return (
    <ul>
      <li>
        <Link to="/exercise-1/artist/1">Andy Warhol</Link>
      </li>
      <li>
        <Link to="/exercise-1/artist/2">Nicolas Party</Link>
      </li>
      <li>
        <Link to="/exercise-1/artist/3">Kehinde Wiley</Link>
      </li>
    </ul>
  );
};

const Artist = () => {
  const { artistID } = useParams();

  return <h1> artist {artistID} </h1>;
};
