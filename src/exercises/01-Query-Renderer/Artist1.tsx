import React from 'react';
import { useParams } from 'react-router-dom';

export const Artist1 = () => {
  const { artistID } = useParams();

  return <h1> artist {artistID} </h1>;
};
