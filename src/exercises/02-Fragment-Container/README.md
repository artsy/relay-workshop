# FragmentContainer

## Introduction - What is a FragmentContainer?

> A Fragment Container is a higher-order component that allows components to specify their data requirements. A container does not directly fetch data, but instead declares a _specification_ of the data needed for rendering, and then Relay will guarantee that this data is available _before_ rendering occurs.

_Source: [Relay docs: FragmentContainer](https://relay.dev/docs/v10.1.3/fragment-container/)_

Building a React app requires intentional effort to isolate components. Markup, styles, state management, etc. typically belong to the nearest component that needs them. 

Relay allows us to also precisely define the _data_ required to render each component in a tree, with FragmentContainers. 

If a QueryRenderer is the top-level component of a tree that renders data, FragmentContainers define the contract each child component needs from the data. While there is a single QueryRenderer associated with each network request in our app, each request will retrieve the data for many FragmentContainers. 

In this exercise we'll extract a new component in our app, and wrap it in a FragmentContainer to specify the data it requires. 

## Exercise 2: Isolating specified data with a FragmentContainer

### Setting up

Start the app:

💻 _Run `yarn start-exercises` from a console pointed at the root of this project_

View the app for this exercise in a browser:

💻 _Visit [localhost:1234/exercise-2](http://localhost:1234/exercise-2)_

### Orient yourself

This app renders a list of artists:
TODO: is this what the app does? figure out a good example for extracting.
TODO: screenshot of the app

When you click on an artist's name, it takes you to the artist detail page:

TODO: screenshot of starting artist detail page

We'll be focused on the artist detail page. 

The 

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
