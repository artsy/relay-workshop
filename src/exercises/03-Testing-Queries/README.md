## Testing querying with Relay

- introduce (at a high level) the tooling we'll use to write tests
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