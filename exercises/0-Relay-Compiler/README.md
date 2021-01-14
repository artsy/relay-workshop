# Relay Compiler

## Introduction - What is a relay compiler?

> Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation.

_Source: [Introduction to Relay](https://relay.dev/docs/en/introduction-to-relay)_

If you've ever built a modern JavaScript app you've likely faced the challenge of managing data effectively and performantly. Relay attempts to solve this problem for React apps. 

Relay allows us to specify the data needed for each component _within each component_. This makes for a nice developer experience because the data is defined right alongside the component rendering it, but querying for that data from each component would be terribly inefficient. To address this, Relay aggregates the data needed for all components in a tree into one top-level query — so one network request is made for _all_ the required data on the page. 

At build-time, Relay's compiler inspects the component tree to discover all data needed, and generates the appropriate GraphQL queries for run-time requests to use.

In this exercise we'll see how the Relay compiler generates the artifacts it needs to make efficient data requests.

## Exercise: recompile after changes

### Setting Up

1. Start the app.
   - From a console pointed at the root of this project
   - `yarn start-exercise-1`
2. View the app for this exercise in a browser.
   - [localhost:1234/exercise-1](http://localhost:1234/exercise-1)

### Orient Yourself

This app renders information about an artist. 

TODO: screenshot

The component rendering the artist information is [the Artist component](./app/Artist.tsx). It emits the artist name: 

```typescript
TODO: sample
```

It is connected to Relay (don't worry about how yet), and queries the following artist data: 

```graphql
TODO: sample
```

Our GraphQL endpoint also provides the artist's year of birth, but we're not showing it yet! Let's show it.

### Add the field to the component

The name of the field we want to emit is `birthYear` in our GraphQL endpoint, so we'll need to add it to the GraphQL query fragment.

💻 Add `birthYear` to [line ??? in the Artist component](./app/Artist.tsx): 

```graphql
TODO: sample including new birthYear field
```

Then we'll need to render the field in the React component.

💻 Add a line to render the `birthYear` field in [the Artist component](./app/Artist.tsx):

```typescript
TODO: sample adding `{artist.birthYear}` to component
```

💻 Save the file.

### Why doesn't this work?

At this point you should see (TODO: how does it fail?). Why?

We added the field to the component, and the GraphQL query, but we haven't run the Relay compiler. Relay needs to aggregate all the data we're rendering at build-time, so that it has the proper query to send to the server.

Let's do that now!

### Run the Relay compiler

💻 `yarn relay`

This shouldn't take long to run, and when it's finished your page should reload (TODO: or refresh it?) with the artist's birth year now showing!

🎉 We did it.

### What did the Relay compiler do?

#### It added the new field to the query that will be used at runtime.

TODO: show where to find that

#### It added the new field to the associated types.

You might have noticed that before we ran the compiler, we had red squigglies complaining about types missing:

TODO: show the error

This was a clue to us that relay hadn't run. We're using a plugin named `relay-compiler-language-typescript` to generate TypeScript types for all our Relay components, and they get generated when the compiler runs. 

If we view the defined type that is associated with this component, we can see our field has been added:

TODO: show the new field in the type.

TypeScript is not required to work with Relay, but it is really helpful. When you use `relay-compiler-language-typescript` to generate types  for all your Relay components, you're less likely to reference a property that doesn't exist or you haven't queried for.

## Resources

The [Thinking In Relay](https://relay.dev/docs/en/thinking-in-relay) doc is a great resource for understanding how Relay efficiently renders data from a GraphQL endpoint.

Something about TypeScript.