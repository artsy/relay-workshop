import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Artist2AuctionResults } from './Artist2AuctionResults';
import { Artist2BioFragmentContainer } from './Artist2Bio';
import { Artist2HeadingFragmentContainer } from './Artist2Heading';
import { Artist2_artist } from './__generated__/Artist2_artist.graphql';

interface Artist2Props {
  artist: Artist2_artist;
}

export const Artist2: React.FC<Artist2Props> = ({ artist }) => {
  return (
    <div>
      <Artist2HeadingFragmentContainer artist={artist} />
      <hr />
      <Artist2BioFragmentContainer artist={artist} />
      <hr />
      <Artist2AuctionResults artist={artist} />
    </div>
  );
};

export const Artist2FragmentContainer = createFragmentContainer(Artist2, {
  artist: graphql`
    fragment Artist2_artist on Artist {
      ...Artist2Heading_artist
      ...Artist2Bio_artist
      auctionRecord
      auctionLotsSoldAnnually
    }
  `,
});
