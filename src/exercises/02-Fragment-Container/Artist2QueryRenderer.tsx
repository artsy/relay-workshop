import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { useParams } from 'react-router-dom';
import { environment } from '../../relay';
import { Artist2 } from './Artist2';
import { Artist2QueryRendererQuery } from './__generated__/Artist2QueryRendererQuery.graphql';

export const Artist2QueryRenderer = () => {
  const { artistID } = useParams();

  return (
    <QueryRenderer<Artist2QueryRendererQuery>
      environment={environment}
      query={graphql`
        query Artist2QueryRendererQuery($artistID: ID!) {
          artist(id: $artistID) {
            name
            birthYear
            bio
            auctionRecord
            auctionLotsSoldAnnually
          }
        }
      `}
      variables={{ artistID }}
      render={({ props }) => {
        if (!props || !props.artist) {
          return <div>Loading</div>;
        }
        return <Artist2 artist={props.artist} />;
      }}
    />
  );
};
