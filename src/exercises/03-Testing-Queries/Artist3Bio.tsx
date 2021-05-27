import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Artist3Bio_artist } from './__generated__/Artist3Bio_artist.graphql';

interface Artist3BioProps {
  artist: Artist3Bio_artist;
}

export const Artist3Bio: React.FC<Artist3BioProps> = ({ artist }) => {
  return (
    <>
      <h3>Bio</h3>
      <p>{artist.bio}</p>
    </>
  );
};

export const Artist3BioFragmentContainer = createFragmentContainer(Artist3Bio, {
  artist: graphql`
    fragment Artist3Bio_artist on Artist {
      bio
    }
  `,
});
