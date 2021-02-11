import React from 'react';
import { useParams } from 'react-router-dom';

export const Artist1 = (props) => {
  const { artistID } = useParams();

  return (
    <div>
      <h1>{props.artist.name}</h1>
      <h2>b. {props.artist.birthYear}</h2>
    </div>
  );
};
