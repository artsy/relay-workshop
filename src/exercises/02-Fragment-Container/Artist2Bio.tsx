import React from 'react';

interface Artist2BioProps {
  artist: {
    bio: string;
  };
}

export const Artist2Bio: React.FC<Artist2BioProps> = ({ artist }) => {
  return (
    <>
      <h3>Bio</h3>
      <p>{artist.bio}</p>
    </>
  );
};
