import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { Artist3Heading_artist } from "./__generated__/Artist3Heading_artist.graphql"

interface Artist3HeadingProps {
  artist: Artist3Heading_artist
}

export const Artist3Heading: React.FC<Artist3HeadingProps> = ({ artist }) => {
  return (
    <>
      <h1>{artist.name}</h1>
      <h3>b. {artist.birthYear}</h3>
    </>
  )
}

export const DumbArtist3Heading: React.FC = (props) => {
  return <div>{props.artist.name}</div>
}

export const Artist3HeadingFragmentContainer = createFragmentContainer(
  Artist3Heading,
  {
    artist: graphql`
      fragment Artist3Heading_artist on Artist {
        name
        birthYear
      }
    `,
  }
)
