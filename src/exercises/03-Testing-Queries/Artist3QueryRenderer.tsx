import React from "react"
import { graphql, QueryRenderer } from "react-relay"
import { useParams } from "react-router-dom"
import { environment } from "../../relay"
import { Artist3FragmentContainer } from "./Artist3"
import { Artist3QueryRendererQuery } from "./__generated__/Artist3QueryRendererQuery.graphql"

export const Artist3QueryRenderer = () => {
  const { artistID } = useParams()

  return (
    <QueryRenderer<Artist3QueryRendererQuery>
      environment={environment}
      query={graphql`
        query Artist3QueryRendererQuery($artistID: ID!) {
          artist(id: $artistID) {
            ...Artist3_artist
          }
        }
      `}
      variables={{ artistID }}
      render={({ props }) => {
        if (!props || !props.artist) {
          return <div>Loading</div>
        }
        return <Artist3FragmentContainer artist={props.artist} />
      }}
    />
  )
}
