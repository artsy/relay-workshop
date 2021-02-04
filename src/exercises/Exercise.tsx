import React from 'react';

interface ExerciseProps {
  number: number;
  name: string;
}

export const Exercise: React.FC<ExerciseProps> = ({
  number,
  name,
  children,
}) => {
  return (
    <>
      <h1>
        Exercise {number}: {name}
      </h1>
      {children}
    </>
  );
};
