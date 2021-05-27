// import React from 'react';
// import { createFragmentContainer, graphql } from 'react-relay';
// import { Artist3AuctionResultsFragmentContainer } from './Artist3AuctionResults';
// import { Artist3BioFragmentContainer } from './Artist3Bio';
// import { Artist3HeadingFragmentContainer } from './Artist3Heading';
// import { Artist3_artist } from './__generated__/Artist3_artist.graphql';

// interface Artist3Props {
//   artist: Artist3_artist;
// }

// export const Artist3: React.FC<Artist3Props> = ({ artist }) => {
//   return (
//     <div>
//       <Artist3HeadingFragmentContainer artist={artist} />
//       <hr />
//       <Artist3BioFragmentContainer artist={artist} />
//       <hr />
//       <Artist3AuctionResultsFragmentContainer artist={artist} />
//     </div>
//   );
// };

// export const Artist3FragmentContainer = createFragmentContainer(Artist3, {
//   artist: graphql`
//     fragment Artist3_artist on Artist {
//       ...Artist3Heading_artist
//       ...Artist3Bio_artist
//       ...Artist3AuctionResults_artist
//     }
//   `,
// });
