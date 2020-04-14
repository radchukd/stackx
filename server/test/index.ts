import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';
import schema from '../src/graphql';

const apolloServer: ApolloServer = new ApolloServer({
  schema,
  context: () => null,
});

export const { query, mutate } = createTestClient(apolloServer);
