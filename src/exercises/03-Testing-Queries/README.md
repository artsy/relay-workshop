# Testing Queries

## Introduction — What are we testing, and how?

So far we've built an app that queries data. As good dev citizens, we want to write some tests to make sure our app is displaying what we think it's displaying. This will help us prevent future regressions, as well as document our expectations of the system for future developers.

We are going to use [Jest][jest], [`relay-test-utils`][relay-test-utils], and [React Testing Library][react-testing-library] to write unit tests for our components that use Relay. There are three main Relay modules that we'll use in our tests (we'll go more into these later):

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

We'll write two tests in this exercise. Both will confirm that the correct information is being rendered by the component, but we'll take two different approaches to the tests:

1. Completely isolated from Relay
2. Integrated with a mocked Relay store.

We've stubbed out a file to hold these tests: Artist3Heading.spec.tsx.

For now, this file contains a single import, and a set of Jest test scenarios stubbed out:

```tsx
import React from "react"

describe("Artist3Heading", () => {
  describe("as an isolated component", () => {
    it("renders the values we give it", () => {})
  })

  describe("as a Relay fragmentContainer", () => {
    it("renders the values from the Relay query", () => {})
  })
})
```

_./Artist3Heading.spec.tsx_

We're going to fill in these test scenarios!

### Test Artist3Heading in isolation

We'll start with a test of our component in isolation from Relay. We don't do this often at Artsy, but occasionally we just want to verify some logic in a component, and we don't really care how Relay plays a part.

The test we'll write will do this:

1. Define some props
2. Render the `Artist3Heading` component with those props
3. Assert that the artist name appears in the rendered component

Let's start by rendering the component in the test — since we're using TypeScript, this will give us some guidance on which props we need to pass into it.

💻 _Import the dependencies we'll need to render the Artist3Heading in our test_

```typescript
import { render } from "@testing-library/react"
import { Artist3Heading } from "./Artist3Heading"
```

_./Artist3Heading.spec.tsx_

The [`render` method from React Testing Library](https://testing-library.com/docs/react-testing-library/api#render) renders a React component into a testable DOM.

The Artist3Heading is the component we're going to render 😀.

💻 _Update the "renders the values we give it" test to render our `Artist3Heading` component:_

```typescript
// ...

describe("as an isolated component", () => {
  it("renders the values we give it", () => {
    render(<Artist3Heading />)
  })
})

// ...
```

_./Artist3Heading.spec.tsx_

If you save the test file, you'll see a failing test in your console; but even before that, you might have noticed type errors from TypeScript on the `Artist3Heading` element being rendered:

```
Property 'artist' is missing in type '{}' but required in type 'Artist3HeadingProps'.ts(2741)
```

We can use this type error to guide us in building up the appropriate test props. In this case, it's telling us that we need to pass in an artist. Let's pass an empty object to get a little further.

💻 _Update the "renders the values we give it" test to pass an empty artist to the `Artist3Heading` component:_

```typescript
describe("as an isolated component", () => {
  it("renders the values we give it", () => {
    const artist = {}

    render(<Artist3Heading artist={artist} />)
  })
})
```

_./Artist3Heading.spec.tsx_

Again, you'll see a type error. This time it's on the `artist` prop of the declared `Artist3Heading` element, and it says:

```
Type '{}' is missing the following properties from type 'Artist3Heading_artist': name, birthYear, " $refType"
```

We're getting there! It looks like we need to add a few properties to our test `artist` object: the `name`, `birthYear`, ....and what's a `" $refType"`????

Recall that the `relay-compiler-language-typescript' plugin is generating TypeScript types for our Relay queries. One of the artifacts of this type generation is a property named `" $refType"` on any fragments in our Relay tree. Its value always identifies the fragment it's associated with.

We can see the `" $refType"` for this type in `./__generated__/Artist3Heading_artist.graphql.ts#L10`:

```typescript
export type Artist3Heading_artist = {
  // ...
  readonly " $refType": "Artist3Heading_artist"
}
```

_`./__generated__/Artist3Heading_artist.graphql.ts`_

This tells us what value we'll use for this property in our test artist: `"Artist3Heading_artist"`. (TODO: this is a lie! is there a way to use this value instead of null?)

Let's fill in the properties of our test artist so that our component renders properly.

💻 _Update the "renders the values we give it" test to pass a complete `artist` object:_

```typescript
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
```

_./Artist3Heading.spec.tsx_

You should see no remaining type errors! 🎉 And a passing test! 🎉

...blah blah blah but we aren't actually asserting anything, so let's do that next....

- guide them to write the silly test (test #1)
- guidance: tell them when to use this kind of test, link them to some force examples, etc

### Test Artist3Heading connected to Relay

- describe relay testing tools
  - createMockEnvironment
    - talk about distinction between this and the default environment
  - resolveMostRecentOperation
- help them build up to the fully mocked test (start close to the first test & add in all the mocking pieces one at a time - basically we don't want to scare them with a big test, we want to slowly guide them to it)
  - createMockEnvironment
  - QueryRenderer (this is the unique part of the test!)
  - resolveMostRecentOperation
- guidance:
  - most of the paperwork/setup/infrastructure is usually abstracted so that the tests can focus on what makes them unique
  -

## Wrapping up

- summarize what we did in this exercise

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

[jest]: TODO
[relay-test-utils]: TODO
[react-testing-library]: https://testing-library.com/docs/react-testing-library/intro
