import React from "react"
import { render } from "@testing-library/react"
import { QueryRenderer } from "react-relay"
import { MockPayloadGenerator, createMockEnvironment } from "relay-test-utils"
import { GraphQLTaggedNode, OperationType } from "relay-runtime"
import { MockResolvers } from "relay-test-utils/lib/RelayMockPayloadGenerator"
import { DumbArtist3Heading } from "./Artist3Heading"

describe("Artist3Heading", () => {
  const props = {
    artist: {
      name: "Andy Warhol",
    },
  }

  const { container, getByText } = render(<DumbArtist3Heading {...props} />)

  it("has props", () => {
    const dumbArtistComponent = getByText("Andy Warhol")
    
    expect(dumbArtistComponent).toHaveLength(1)
  })
})
