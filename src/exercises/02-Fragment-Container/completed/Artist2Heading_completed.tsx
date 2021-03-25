// import React from 'react';
// import { createFragmentContainer, graphql } from 'react-relay';
// import { Artist2Heading_artist } from './__generated__/Artist2Heading_artist.graphql';

// interface Artist2HeadingProps {
//   artist: Artist2Heading_artist;
// }

// export const Artist2Heading: React.FC<Artist2HeadingProps> = ({ artist }) => {
//   return (
//     <>
//       <h1>{artist.name}</h1>
//       <h2>b. {artist.birthYear}</h2>
//     </>
//   );
// };

// export const Artist2HeadingFragmentContainer = createFragmentContainer(
//   Artist2Heading,
//   {
//     artist: graphql`
//       fragment Artist2Heading_artist on Artist {
//         name
//         birthYear
//       }
//     `,
//   }
// );
