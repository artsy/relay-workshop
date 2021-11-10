import React from "react"

interface Artist1Props {
  artist: {
    artistID?: number
    name?: string
    birthYear?: number
  }
}

export const Artist1: React.FC<Artist1Props> = props => {
  return (
    <div>
      <h1> artist id: {props.artist.artistID} </h1>
      <h1> Name {props.artist.name} </h1>
      <h1> year {props.artist.birthYear} </h1>
    </div>
  )
}
