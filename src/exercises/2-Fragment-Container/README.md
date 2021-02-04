# FragmentContainer

# Introduction - What is a FragmentContainer

    - TODO

- exercise: extract a common component
  - notice two components are showing the same thing
  - create common UI component
  - add graphql fragment
  - connect fragment to UI with FragmentContainer
  - update caller UIs to call new component
  - spread fragment into caller queries
  - recompile
- Summary
  - how do fragment containers all bubble up into one query renderer?
  - common gotcha
    - importing the component instead of the wrapping fragment container
