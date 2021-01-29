import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../../relay';
import { Exercise0Query } from './__generated__/Exercise0Query.graphql.js';

const Exercise0 = () => (
  <QueryRenderer<Exercise0Query>
    environment={environment}
    query={graphql`
      query Exercise0Query {
        artist(id: 1) {
          name
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
      return <div>Hello, {props.artist.name}</div>;
    }}
  />
);

export default Exercise0;
