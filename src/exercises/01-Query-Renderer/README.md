# QueryRenderer

## Introduction - What is a QueryRenderer?

> A QueryRenderer is a React Component at the root of a Relay component tree. It takes a query, fetches the given query, and uses the render prop to render the resulting data.

_Source: [Relay docs: QueryRenderer](https://relay.dev/docs/en/query-renderer)_

We've mentioned that Relay aggregates all the data needed for a component tree to render data from a GraphQL source. The component responsible for making the actual request for data is the QueryRenderer.

Therefore we must emit a QueryRenderer for any tree of components that we want to hydrate with data.

A QueryRenderer takes two critical arguments: a query to execute against the GraphQL endpoint, and the React component to render once the data is retrieved.

In this exercise we'll create a new page in our app and use a QueryRenderer to show data from our GraphQL endpoint.

## Exercise 1: Rendering data with a QueryRenderer

### Setting up

Start the app:

💻 _Run `yarn start-exercises` from a console pointed at the root of this project_

View the app for this exercise in a browser:

💻 _Visit [localhost:1234/exercise-1](http://localhost:1234/exercise-1)_

### Orient yourself

This app renders a list of artists.

![The app for this exercise, running in a browser](TODO)

When you click on an artist's name, it takes you to a new URL with the artist ID in the path. The page that's rendered doesn't yet emit details about the artist. 

![The artist page for this exercise, running in a browser](TODO)

The component rendering this page is [the Artist1 component](./Artist1.tsx). 

### Render some artist data

Let's update this page to show data about the current artist. 

sjhsjhsjh HERE

#### Add UI component to render artist

#### Add a QueryRenderer to retrieve artist data

##### Write the GraphQL query

##### Connect the QueryRenderer to the UI component

#### Add a loading indicator

#### Pass arguments to the query

##### Step 1: Move arg from query to variables prop

##### Step 2: Grab value of variable from route 

## TODO:

- See if there are other things we specify in force/eigen when using QueryRenderers that are worth calling out

## Summary

- Summarize what the query renderer is doing to connect the component to the graphql API
  - react-relay vs relay
    - relay doesn't include react components; react-relay does

## Recommendations

### Be careful nesting QueryRenderers

> As React components, QueryRenderers can be rendered anywhere that a React component can be rendered, i.e. not just at the top level but within other components or containers; for example, to lazily fetch additional data for a popover.
> 
> However, a QueryRenderer will not start loading its data until it is mounted, so nested QueryRenderer components can lead to request waterfalls if used unnecessarily.

_Source: [Relay docs: QueryRenderer](https://relay.dev/docs/en/query-renderer)_

## Resources

https://relay.dev/docs/en/runtime-architecture

Not sure if I'll use this: 
_Source: [QueryRenderer](https://relay.dev/docs/en/query-renderer)_