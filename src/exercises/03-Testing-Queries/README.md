# Testing Queries

## Introduction — What are we testing, and how?

So far we've built an app that queries data. As good dev citizens, we want to write some tests to make sure our app is displaying what we think it's displaying. This will help us prevent future regressions, as well as document our expectations of the system for future developers.

When we test our Relay components at Artsy, we typically test at the FragmentContainer level. [It is possible to test at the QueryRenderer level](https://relay.dev/docs/guides/testing-relay-components/#relay-component-test), but those are essentially integration tests of multiple fragments, and we typically get just as much value out of testing in a slightly more isolated manner. This exercise will demonstrate testing at the FragmentContainer level.

We are going to use [Jest][jest], [`relay-test-utils`][relay-test-utils], and [React Testing Library][react-testing-library] to write a unit test for a FragmentContainer. There are three main Relay modules that we'll use in our tests (we'll go more into these later):

- `createMockEnvironment`
- `MockPayloadGenerator`
- `QueryRenderer`

Read more:
[Relay docs: Testing Relay Components](https://relay.dev/docs/guides/testing-relay-components/)

## Exercise 3: Testing queries

### Setting up

Start the tests:

💻 _Run `yarn test:watch` from a console pointed at the root of this project_

This command will run Jest in watch mode, and we'll see our tests re-run as we make changes. If you're unfamiliar with Jest, [here's a nice introduction to its features](https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/).

You should see a message that there are "No tests found related to files changed since last commit.":

```
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

### Orient yourself

#### Artist3Heading component

We are going to write tests against the Artist3Heading component from the previous exercise, which lives in the Artist3Heading.tsx file. This component renders the artist's name and birth year.

#### Artist3Heading tests

We're going to write one test in this exercise. It will confirm that the correct information is being rendered by the component. The test will be integrated with a mocked Relay store.

We've stubbed out a file to hold this test: Artist3Heading.spec.tsx.

For now, this file contains a single import, and a Jest test scenario stubbed out:

```tsx
import React from "react"

describe("Artist3Heading", () => {
  it("renders the values from the Relay query", () => {})
})
```

_./Artist3Heading.spec.tsx_

We're going to fill in this test scenario!

### Test the Artist3HeadingFragmentContainer component

The test we'll write will do this:

TODO: add links to the bottom sections that correspond to each of these

1. Create a mock Relay environment so that we can mock a server response
2. Render a test QueryRenderer that emits the Artist3HeadingFragmentContainer component
3. Resolve the most recent GraphQL operation with a mock response, to simulate the server responding to our Relay query
4. Assert that the mocked artist name appears in the rendered component

This will give us confidence that when our component is rendered in a real environment, it will display the values from our GraphQL endpoint that we expect it to.

#### Mock the Relay environment

The [Relay environment](https://relay.dev/docs/glossary/#environment) is an object that sits at the top of a Relay-connected app. All Relay components in an app need an environment defined. The environment provides the infrastructure that Relay needs to manage network requests and responses against your GraphQL server.

In production code, the Relay environment communicates with a live GraphQL server. If we tried to write tests using this live connection, they'd be unpredictable and flaky. The `createMockEnvironment` helper from `react-test-utils` allows us to mock out a Relay environment that doesn't actually communicate with a server — empowering us to write predictable tests.

All tests written in a Relay app will use `createMockEnvironment`. Often we abstract this so that not every test has to instantiate the mock environment, but for the sake of our tests, we're going to do it inline. (TODO: link to force/eigen abstractions that mask it)

💻 _Import the dependencies we'll need to mock the Relay environment in our test_

```typescript
import { createMockEnvironment } from "relay-test-utils"
```

_./Artist3Heading.spec.tsx_

💻 _Create a mock Relay environment for our test to use_

```typescript
it("renders the values from the Relay query", () => {
  const mockEnvironment = createMockEnvironment()
})
```

We'll use this `mockEnvironment` in our next step.

#### Render a test QueryRenderer

First we need to import all the necessary dependencies.

```typescript
import { graphql, QueryRenderer } from "react-relay"
import { render } from "@testing-library/react"
import { Artist3HeadingFragmentContainer } from "./Artist3Heading"
import { Artist3HeadingTestQuery } from "./__generated__/Artist3HeadingTestQuery.graphql"
```

We will start by using `render` from `@testing-library/react` to render a `QueryRenderer`. `render` gives us back some utilities for asserting that our component renders the way we expect it to. For now, let call it `root`.

Within the `render` call, we will add a `QueryRenderer`, with its required props.

The first prop, `environment`, is the one that will take the `mockEnvironment` we created earlier.

The second prop, `query`, is the GraphQL query we want to test. We will fill in this prop later.

The third prop, `variables`, takes the required variables we need to pass to the query. In our case, we don't need any, but we do need to pass an empty object, since `variables` is a required prop.

The last prop, `render` (not to be confused with `render` from `@testing-library/react`), is a function that takes the response from the GraphQL query and renders the component. For now, we only render the a `div`.

```typescript
it("renders the values from the Relay query", () => {
  const mockEnvironment = createMockEnvironment()

  const root = render(
    <QueryRenderer<Artist3HeadingTestQuery>
      environment={mockEnvironment}
      query={graphql``}
      variables={{}}
      render={({ props }) => {
        return <div>tests are fun</div>
      }}
    />
)
```

Running the test at this point will produce errors, something along the line of `GraphQLError: relay-workshop/src/exercises/03-Testing-Queries/Artist3Heading.spec.tsx: Syntax Error: Unexpected <EOF>.`. The reason for this error is that the `graphql` function expects a correct query, and the empty string is not one. So let's make that query correct.

```typescript
query={graphql`
  query Artist3HeadingTestQuery {
    artist(id: "pablo-picasso") {
      ...Artist3Heading_artist
    }
  }
`}
```

todo: something about how we're spreading in a fragment, like we learned in the queryrenderer/fragment container exercises.

Now, using this full query, we should be able to get further. If you named that query something different, you might have gotten an error from relay along the lines of

```
Parse error: Error: RelayFindGraphQLTags: Operation names in graphql tags must be prefixed with the module name and end in "Mutation", "Query", or "Subscription". Got `CoolNameTest` in module `Artist3Heading`. in "exercises/03-Testing-Queries/Artist3Heading.spec.tsx"
```

Relay has strict naming rules, that we have to follow. Therefore, we will name this query `Artist3HeadingTestQuery`.

At this point, the GraphQLError is no longer appearing, and the test is green. It's not yet testing what we want it to test. Let's mock the response first, and then we will render the actual `Artist3HeadingFragmentContainer` component.

#### Mock (and resolve) a GraphQL server response

React/Relay apps are asynchronous by nature — the components in our app initially render in a "loading" state at first, and when the network requests for data complete, the app re-renders with the loaded data passed in as props. This is useful to remember when looking at a test of a Relay component — we can render the component, as we have already, without actually simulating any network requests. When we do this, we shouldn't expect that any data is populated on the component.

To actually test that data is being populated properly, we need to render the component _and then simulate a network request resolving_. Only after the simulated network request has resolved can we assert that the data is appearing.

The `mockEnvironment` from our earlier step provides us with a method for simulating a network request -- `resolveMostRecentOperation`.

If we wanted to, we could hand-craft the entire response we'd expect from the server — but `relay-test-utils` also provides a better way to mock the response shape — `MockPayloadGenerator`.

💻 _Simulate a mock network request/response after our component renders_

```typescript
describe("Artist3Heading", () => {
  it("renders the values from the Relay query", () => {
    import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils"

    // ...

    const mockEnvironment = createMockEnvironment()

    const root = render(...)

    mockEnvironment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, {
        Artist: () => ({
          name: "Andy Warhol",
          birthYear: 123,
        }),
      })
    )
```

_./Artist3Heading.spec.tsx_

Note that we access `resolveMostRecentOperation` on the `mock` property of our `mockEnvironment`. The call to `resolveMostRecentOperation` takes a function as an argument; that function should return the shape that we want to simulate as a server response.

`MockPayloadGenerator.generate` takes the `operation` as an argument, and then an object that represents the shape we want to simulate. The name of the property on this shape (`Artist`) should match the name of the type in our `QueryRenderer`'s `query` (`artist`) — though the case should be PascalCase instead of camelCase.

In this case, we're going to tell Relay that we want to simulate an artist with name `Andy Warhol` and birth year `123`. `MockPayloadGenerator` will fill in any fields we don't specify with sensible mock values — we could write this test without specifying anything at all! At Artsy we tend to specify at least the values we want to assert against, so that our tests are repeatable and the data is clear to the reader.

When we run our tests, they should still pass!! But we're not done yet — our test is simulating a network response for our query, but our `QueryRenderer` is still not actually rendering our `Artist3HeadingFragmentContainer`! Let's fix that!

#### Render the Artist3HeadingFragmentContainer

In our initial test `QueryRenderer`, we rendered a static message. Now that we've got data flowing through Relay, let's fill in the `render` prop with something more realistic.

```typescript
    const root = render(
      <QueryRenderer<Artist3HeadingTestQuery>
        ...
        render={({ props }) => {
          if (!props || !props.artist) {
            return <div>Loading</div>
          }
          return <Artist3HeadingFragmentContainer artist={props.artist} />
        }}
      />
    )
```

_./Artist3Heading.spec.tsx_

We start with some guarding against empty props — remember that Relay requests are happening asynchronously, and our `QueryRenderer` is going to render something even before the `artist` gets filled in from the mocked response.

Finally, we render our `Artist3HeadingFragmentContainer` with the `artist` prop that we get from Relay.

Save the file, and our test should still be green!

We've got everything wired up now. Our final step will be to assert the presence of data in our rendered component!

#### Assert that the component is rendering the mocked artist

The call we made to `render()` returned a whole bunch of useful testing-library methods for inspecting and interacting with our rendered component. We initially stored them in a variable named `root`. We can access them on `root`, or destructure the specific methods we want.

We're going to use the `queryAllByText` method to find specific text in the rendered component — the artist's name. Then we'll assert that the text exists exactly once in the output.

Be sure to make this query after the most recent Relay operation has been resolved, to be sure that the component is hydrated with data.

```typescript
it("renders the values from the Relay query", () => {
    const mockEnvironment = createMockEnvironment()

    const root = render(...)

    mockEnvironment.mock.resolveMostRecentOperation(...)

    const header = root.queryAllByText("Andy Warhol")
    expect(header).toHaveLength(1)
  })
```

_./Artist3Heading.spec.tsx_

Save this, and our test should be green! And it's testing something useful! 🎉 🎉 🎉

There are many ways to inspect a rendered component with testing-library -- see [the docs](https://testing-library.com/docs/queries/about/) for a comprehensive discussion of them.

...left off here....

### Celebrate!!!

## Wrapping up

- summarize what we did in this exercise

## Guidance

- most of the paperwork/setup/infrastructure is usually abstracted so that the tests can focus on what makes them unique

## Common mistakes

- naming queries
- different components in the tree using different relay environments (some of them the mock, some the default/real one)
  - results in unpredictable/unreliable tests
  - fix can be mocking `defaultEnvironment`

## Resources

- link to relay docs
- link to force & eigen tests/PRs
  - the environment issue that George ran into
- how is relay mocking data? probably some docs in the relay testing tools we can link to.

// TODO: make sure `yarn relay` runs before `yarn test` and together with `yarn test --watch`

[jest]: TODO
[relay-test-utils]: TODO
[react-testing-library]: https://testing-library.com/docs/react-testing-library/intro
