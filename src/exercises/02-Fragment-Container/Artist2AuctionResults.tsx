import React from "react"

interface Artist2AuctionResultsProps {
  artist: {
    auctionRecord: string
    auctionLotsSoldAnnually: string
  }
}

export const Artist2AuctionResults: React.FC<Artist2AuctionResultsProps> = ({
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
