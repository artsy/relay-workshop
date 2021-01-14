import { createServer } from 'miragejs';
import { createGraphQLHandler } from '@miragejs/graphql';
import graphQLSchema from './schema/fakeArtsy.graphql';

export function makeServer() {
  const server = createServer({
    routes() {
      const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema);
      this.post('/graphql', graphQLHandler);
    },
  });

  // Seed data here. This will likely become noisy quickly so we shouldn't be afraid to refactor when we need it.
  server.create('artist', {
    id: '1',
    name: 'Andy Warhol',
    birthYear: 1940,
  });

  return server;
}
