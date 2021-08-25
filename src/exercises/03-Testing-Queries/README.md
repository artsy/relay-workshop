# Testing Queries

## Introduction — What are we testing, and how?

So far we've built an app that queries data. As good dev citizens, we want to write some tests to make sure our app is displaying what we think it's displaying. This will help us prevent future regressions, as well as document our expectations of the system for future developers.

We're going to use a couple tools ....

- introduce (at a high level) the tooling we'll use to write tests

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
- guide them to write the silly test
- guidance: tell them when to use this kind of test, link them to some force examples, etc

- look at existing tests in force/eigen/volt re: modern patterns for testing
- testing at different levels
  - _what_ do you want to mock? fragment container, parent, at what level?
    - testing an entire query tree? (not sure yet but along the lines of an "end-to-end" test)
    - testing a fragment container (mocking the fragment)
    - UI component testing (nothing mocked, just props passed in a particular shape)
      - $fragmentHref
      - this can probably just be discussed, not hands-on
- misc
  - how is relay mocking data? probably some docs in the relay testing tools we can link to.
  -
