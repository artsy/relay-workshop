import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from './relay';
import { AppQuery } from './__generated__/AppQuery.graphql.js';

const App = () => (
  <QueryRenderer<AppQuery>
    environment={environment}
    query={graphql`
      query AppQuery {
        allPlanets {
          totalCount
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (error) {
        return <div>Error!</div>;
      }
      if (!props) {
        return <div>Loading</div>;
      }
      return (
        <div>There are {props.allPlanets.totalCount} planets in Star Wars</div>
      );
    }}
  />
);

export default App;
