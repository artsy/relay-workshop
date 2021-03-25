import React from 'react';

interface Artist2HeadingProps {
  artist: {
    name: string;
    birthYear: number;
  };
}
export const Artist2Heading: React.FC<Artist2HeadingProps> = ({ artist }) => {
  return (
    <>
      <h1>{artist.name}</h1>
      <h2>b. {artist.birthYear}</h2>
    </>
  );
};
