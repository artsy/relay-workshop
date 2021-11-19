import React from "react"
import { render } from "@testing-library/react"
import { QueryRenderer } from "react-relay"
import { MockPayloadGenerator, createMockEnvironment } from "relay-test-utils"
import { graphql } from "relay-runtime"
import {
  Artist3Heading,
  Artist3HeadingFragmentContainer,
  Artist3HeadingProps,
} from "./Artist3Heading"
import { Artist3HeadingTestQuery } from "./__generated__/Artist3HeadingTestQuery.graphql"

describe("Artist3Heading", () => {
  describe("as an isolated component", () => {
    it("renders the values we give it", () => {
      const artist = {
        name: "Andy Warhol",
        birthYear: 1928,
        " $refType": null,
      }

      render(<Artist3Heading artist={artist} />)
    })
  })

  describe("as a Relay fragmentContainer", () => {
    it("renders the values from the Relay query", () => {})
  })
})
