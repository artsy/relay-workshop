# Testing Queries

## Introduction — What are we testing, and how?

So far we've built an app that queries data. As good dev citizens, we want to write some tests to make sure our app is displaying what we think it's displaying. This will help us prevent future regressions, as well as document our expectations of the system for future developers.

We are using Jest, `relay-test-utils`, and React Testing Library to write unit tests for our components that use Relay. There are three main modules that we'll use in our tests (we'll go more into these later):

- `createMockEnvironment`
- `MockPayloadGenerator`
- `QueryRenderer`

Read more:
[Relay docs: Testing Relay Components](https://relay.dev/docs/guides/testing-relay-components/)

## Exercise 3: Testing queries

### Setting up

Start the tests:

....

### Orient yourself

...

#### Artist3Heading component

...describe what we're going to test about this component...

### Test Artist3Heading in isolation

- describe how we're isolating the test to not use Relay
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
