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
  server.db.loadData({
    artists: seedArtists(),
  });

  return server;
}

function seedArtists() {
  return [
    {
      id: '1',
      name: 'Andy Warhol',
      birthYear: 1928,
      bio:
        'Obsessed with celebrity, consumer culture, and mechanical (re)production, Pop artist Andy Warhol created some of the most iconic images of the 20th century. ',
      auctionRecord: '$105M',
      auctionLotsSoldAnnually: 103,
    },
    { id: '2', name: 'Nicolas Party', birthYear: 1980 },
    { id: '3', name: 'Kehinde Wiley', birthYear: 1977 },
  ];
}
