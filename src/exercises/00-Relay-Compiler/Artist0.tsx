import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Artist0_artist } from './__generated__/Artist0_artist.graphql';

interface Artist0Props {
  artist: Artist0_artist;
}

const Artist0: React.FC<Artist0Props> = (props) => {
  return (
    <div>
      <h1>{props.artist.name}</h1>
    </div>
  );
};

export const Artist0FragmentContainer = createFragmentContainer(Artist0, {
  artist: graphql`
    fragment Artist0_artist on Artist {
      name
    }
  `,
});
