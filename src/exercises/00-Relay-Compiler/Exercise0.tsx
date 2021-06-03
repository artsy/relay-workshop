import React from "react"
import { graphql, QueryRenderer } from "react-relay"
import { environment } from "../../relay"
import { Exercise0Query } from "./__generated__/Exercise0Query.graphql.js"
import { Artist0FragmentContainer } from "./Artist0"
import { Exercise } from "../Exercise"

export const Exercise0 = () => (
  <Exercise number={0} name="Relay Compiler">
    <QueryRenderer<Exercise0Query>
      environment={environment}
      query={graphql`
        query Exercise0Query {
          artist(id: 1) {
            ...Artist0_artist
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>
        }
        if (!props) {
          return <div>Loading</div>
        }
        return <Artist0FragmentContainer artist={props.artist} />
      }}
    />
  </Exercise>
)
