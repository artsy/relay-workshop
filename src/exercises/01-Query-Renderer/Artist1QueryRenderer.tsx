import React from "react"
import { useParams } from "react-router-dom"
import { Artist1 } from "./Artist1"
import {graphql, QueryRenderer} from "react-relay"
import {environment} from "../../relay"
import { env } from "process"
import { Artist1QueryRendererQuery } from "./__generated__/Artist1QueryRendererQuery.graphql"

export const Artist1QueryRenderer = () => {
  const { artistID } = useParams()

  return <QueryRenderer<Artist1QueryRendererQuery> 
            environment={environment}
            query={graphql`
                query Artist1QueryRendererQuery($artistID: ID!){ 
                  artist(id: $artistID){
                    name
                    birthYear
                  }
                }
            `}
            variables={{artistID}}
            render={({props})=>{
              if(!props || !props.artist){
                return <div>Loading</div>
              }
              else{
                return  <Artist1 artist={props.artist} />}
              }
            }
         />
}

