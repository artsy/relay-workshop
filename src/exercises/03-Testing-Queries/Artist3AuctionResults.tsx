import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { Artist3AuctionResults_artist } from "./__generated__/Artist3AuctionResults_artist.graphql"

interface Artist3AuctionResultsProps {
  artist: Artist3AuctionResults_artist
}

export const Artist3AuctionResults: React.FC<Artist3AuctionResultsProps> = ({
  artist,
}) => {
  return (
    <>
      <h3>Auction Results</h3>
      <dl>
        <dt>Auction record</dt>
        <dd>{artist.auctionRecord}</dd>
        <dt>Lots sold annually</dt>
        <dd>{artist.auctionLotsSoldAnnually}</dd>
      </dl>
    </>
  )
}

export const Artist3AuctionResultsFragmentContainer = createFragmentContainer(
  Artist3AuctionResults,
  {
    artist: graphql`
      fragment Artist3AuctionResults_artist on Artist {
        auctionRecord
        auctionLotsSoldAnnually
      }
    `,
  }
)
