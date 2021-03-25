import React from 'react';

interface Artist2Props {
  artist: {
    artistID?: number;
    name?: string;
    birthYear?: number;
  };
}

export const Artist2: React.FC<Artist2Props> = (props) => {
  return (
    <div>
      <h1>{props.artist.name}</h1>
      <h2>b. {props.artist.birthYear}</h2>
    </div>
  );
};
