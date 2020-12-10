# Relay Compiler

## Introduction - What is a relay compiler?

    - TODO
    - check "thinking in relay" doc for inspiration here

## Exercise: recompile after changes

- view an existing component
- add a field to the component for a field that's returned by graphql
- before recompiling, notice that...
  - code shows red squigglies for new field
  - generated types don't include new field
  - in browser, the new display field {gives an error|doesn't actually work}
- recompile relay
- after recompiling, notice that....
  - code doesn't show red squigglies
  - generated types include new field
  - browser shows new field
- Summarize what the compiler is doing to generate these types & hook up the field to the actual query
  - talk about how the relay-compiler-language-typescript plugin adds the type definitions
