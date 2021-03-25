import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Artist2Bio_artist } from './__generated__/Artist2Bio_artist.graphql';

interface Artist2BioProps {
  artist: Artist2Bio_artist;
}

export const Artist2Bio: React.FC<Artist2BioProps> = ({ artist }) => {
  return (
    <>
      <h3>Bio</h3>
      <p>{artist.bio}</p>
    </>
  );
};

export const Artist2BioFragmentContainer = createFragmentContainer(Artist2Bio, {
  artist: graphql`
    fragment Artist2Bio_artist on Artist {
      bio
    }
  `,
});
