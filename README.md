# Relay Learning Exercises

[Relay](https://relay.dev/docs/v10.1.3/) is a powerful GraphQL client. At Artsy we use it in both our [web app](https://github.com/artsy/force) and [mobile app](https://github.com/artsy/eigen).

Relay is also complex and difficult to learn - but it's totally worth it! This project contains exercises to help you learn Relay[\*](#which-version-of-relay-are-we-learning) by introducing concepts a little bit at a time.

## Get Started

1. Clone this repo.
2. Install dependencies: `yarn install`.
3. Confirm that everything installed: if the command `yarn relay` fails, something's not right. Reach out in Artsy's #dev-help Slack channel if you're an Artsy employee, or [create an issue](https://github.com/artsy/relay-workshop/issues/new) if you're not.

## The Exercises

Each folder under `src/exercises` has a README.md containing instructions. Read and follow them!

Any time you see a laptop emoji (💻), you're going to edit code or run a command.

Start with [exercise 0 on the Relay compiler](./src/exercises/00-Relay-Compiler/README.md)!

For support, there is a `completed` folder inside each exercise. If you get stuck, check there to see the code in the completed state for the exercise.

### All Exercises

- [Exercise 0: Relay Compiler](./src/exercises/00-Relay-Compiler/README.md)
- [Exercise 1: QueryRenderer](./src/exercises/01-Query-Renderer/README.md)
- [Exercise 2: Fragment Container](./src/exercises/02-Fragment-Container/README.md)
- [Exercise 3: Testing Queries](./src/exercises/03-Testing-Queries/README.md)
- [Exercise 99: What's Next](./src/exercises/99-Whats-Next/README.md)

## FAQ

### Which version of Relay are we learning?

These exercises are for [Relay Modern](https://relay.dev/docs/v10.1.3/new-in-relay-modern/), version 10.

### Why aren't we learning the most recent version of Relay?

These exercises have been built in support of new engineers at Artsy; thus they are based on code that looks like ours. Relay recently released version 11, including hooks, but neither [Artsy's web app](https://github.com/artsy/force) nor [mobile app](https://github.com/artsy/eigen) are running it yet.

When our codebase is updated to use a newer version of Relay, we'll update these exercises as well.

### What do I do if I run into roadblocks?

There are `Common Mistakes` listed at the bottom of many of the instructions, so be sure to check those out if you run into roadblocks. If you still are blocked, open an issue.
