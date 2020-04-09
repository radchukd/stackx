import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';
import schema from '../src/graphql';

const apolloServer: ApolloServer = new ApolloServer({
  schema,
  context: () => (
    {
      payload: {
        id: '5e8c540ec760e92132dcb8af',
        iat: 1901880643,
        exp: 1901880643,
      },
    }
  ),
});

export const { query, mutate } = createTestClient(apolloServer);
