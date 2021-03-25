import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../../relay';
import { Artist2BioQueryRendererQuery } from './__generated__/Artist2BioQueryRendererQuery.graphql';

export const Artist2BioQueryRenderer = () => {
  return (
    <QueryRenderer<Artist2BioQueryRendererQuery>
      environment={environment}
      query={graphql`
        query Artist2BioQueryRendererQuery {
          artist(id: 1) {
            name
            birthYear
            bio
          }
        }
      `}
      variables={{}}
      render={({ props }) => {
        if (!props || !props.artist) {
          return <div>Loading</div>;
        }
        return <Artist2Bio artist={props.artist} />;
      }}
    />
  );
};

function Artist2Bio({ artist }) {
  return (
    <div>
      <h1>{artist.name}</h1>
      <h2>b. {artist.birthYear}</h2>
      <hr />
      <h3>Bio</h3>
      <p>{artist.bio}</p>
    </div>
  );
}
