import React from "react"
import { graphql, QueryRenderer } from "react-relay"
import { createMockEnvironment } from "relay-test-utils"
import { render } from "@testing-library/react"
import { Artist3HeadingFragmentContainer } from "./Artist3Heading"
import { Artist3HeadingTestQuery } from "./__generated__/Artist3HeadingTestQuery.graphql"

describe("Artist3Heading", () => {
  it("renders the values from the Relay query", () => {
    const mockEnvironment = createMockEnvironment()

    const root = render(
      <QueryRenderer<Artist3HeadingTestQuery>
        environment={mockEnvironment}
        query={graphql`
          query Artist3HeadingTestQuery {
            artist(id: "pablo-picasso") {
              ...Artist3Heading_artist
            }
          }
        `}
        variables={{}}
        render={({ props }) => {
          //   if (!props || !props.artist) {
          //     return <div>Loading</div>
          //   }
          //   return <Artist3HeadingFragmentContainer artist={props.artist} />
          return <div>fun</div>
        }}
      />
    )
  })
})

// import React from "react"
// import { render } from "@testing-library/react"
// import { QueryRenderer } from "react-relay"
// import { MockPayloadGenerator, createMockEnvironment } from "relay-test-utils"
// import { graphql } from "relay-runtime"
// import {
//   Artist3Heading,
//   Artist3HeadingFragmentContainer,
//   Artist3HeadingProps,
// } from "./Artist3Heading"
// import { Artist3HeadingTestQuery } from "./__generated__/Artist3HeadingTestQuery.graphql"

// describe("Artist3Heading", () => {
//   it("renders the values from the Relay query", () => {
//     const mockEnvironment = createMockEnvironment()

//     const { queryAllByText } = render(
//       <QueryRenderer<Artist3HeadingTestQuery>
//         environment={mockEnvironment}
//         query={graphql`
//           query Artist3HeadingTestQuery($artistID: ID!) {
//             artist(id: $artistID) {
//               ...Artist3Heading_artist
//             }
//           }
//         `}
//         variables={{ artistID: "wow" }}
//         render={({ props }) => {
//           if (!props || !props.artist) {
//             return <div>Loading</div>
//           }
//           return <Artist3HeadingFragmentContainer artist={props.artist} />
//         }}
//       />
//     )

//     mockEnvironment.mock.resolveMostRecentOperation(operation =>
//       MockPayloadGenerator.generate(operation, {
//         Artist: () => ({
//           name: "Andy Warhol",
//           birthYear: 123,
//         }),
//       })
//     )

//     const header = queryAllByText("Andy Warhol")
//     expect(header).toHaveLength(1)
//   })
// })
