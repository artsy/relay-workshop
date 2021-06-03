import { createServer } from "miragejs"
import { createGraphQLHandler } from "@miragejs/graphql"
import graphQLSchema from "./schema/fakeArtsy.graphql"

export function makeServer() {
  const server = createServer({
    routes() {
      const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema)
      this.post("/graphql", graphQLHandler)
    },
  })

  // Seed data here. This will likely become noisy quickly so we shouldn't be afraid to refactor when we need it.
  server.db.loadData({
    artists: seedArtists(),
  })

  return server
}

function seedArtists() {
  return [
    {
      id: "1",
      name: "Andy Warhol",
      birthYear: 1928,
      bio: "Obsessed with celebrity, consumer culture, and mechanical (re)production, Pop artist Andy Warhol created some of the most iconic images of the 20th century. ",
      auctionRecord: "$105M",
      auctionLotsSoldAnnually: 103,
    },
    {
      id: "2",
      name: "Nicolas Party",
      birthYear: 1980,
      bio: "Swiss artist Nicolas Party, who was the subject of a solo exhibition at Swiss Institute in 2012, is known for applying his bright, graphic patterns onto everything from ceramics to furniture to floors, ceilings, doorways, and walls.",
      auctionRecord: "$1.35M",
      auctionLotsSoldAnnually: 31,
    },
    {
      id: "3",
      name: "Kehinde Wiley",
      birthYear: 1977,
      bio: "Working exclusively in portraiture, Kehinde Wiley fuses traditional formats and motifs with modern modes of representation.",
      auctionRecord: "$378K",
      auctionLotsSoldAnnually: 53,
    },
  ]
}
