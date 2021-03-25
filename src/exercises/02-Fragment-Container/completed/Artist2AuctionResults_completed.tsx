// import React from 'react';
// import { createFragmentContainer, graphql } from 'react-relay';
// import { Artist2AuctionResults_artist } from './__generated__/Artist2AuctionResults_artist.graphql';

// interface Artist2AuctionResultsProps {
//   artist: Artist2AuctionResults_artist;
// }

// export const Artist2AuctionResults: React.FC<Artist2AuctionResultsProps> = ({
//   artist,
// }) => {
//   return (
//     <>
//       <h3>Auction Results</h3>
//       <dl>
//         <dt>Auction record</dt>
//         <dd>{artist.auctionRecord}</dd>
//         <dt>Lots sold annually</dt>
//         <dd>{artist.auctionLotsSoldAnnually}</dd>
//       </dl>
//     </>
//   );
// };

// export const Artist2AuctionResultsFragmentContainer = createFragmentContainer(
//   Artist2AuctionResults,
//   {
//     artist: graphql`
//       fragment Artist2AuctionResults_artist on Artist {
//         auctionRecord
//         auctionLotsSoldAnnually
//       }
//     `,
//   }
// );
