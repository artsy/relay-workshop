import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../../relay';
import { Artist2AuctionResultsQueryRendererQuery } from './__generated__/Artist2AuctionResultsQueryRendererQuery.graphql';

export const Artist2AuctionResultsQueryRenderer = () => {
  return (
    <QueryRenderer<Artist2AuctionResultsQueryRendererQuery>
      environment={environment}
      query={graphql`
        query Artist2AuctionResultsQueryRendererQuery {
          artist(id: 1) {
            name
            birthYear
            auctionRecord
            auctionLotsSoldAnnually
          }
        }
      `}
      variables={{}}
      render={({ props }) => {
        if (!props || !props.artist) {
          return <div>Loading</div>;
        }
        return <Artist2AuctionResults artist={props.artist} />;
      }}
    />
  );
};

function Artist2AuctionResults({ artist }) {
  return (
    <div>
      <h1>{artist.name}</h1>
      <h2>b. {artist.birthYear}</h2>
      <hr />
      <h3>Auction Results</h3>
      <dl>
        <dt>Auction record</dt>
        <dd>{artist.auctionRecord}</dd>
        <dt>Lots sold annually</dt>
        <dd>{artist.auctionLotsSoldAnnually}</dd>
      </dl>
    </div>
  );
}
