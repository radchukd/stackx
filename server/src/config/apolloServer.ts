import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { Request } from 'express';
import schema from '../graphql';
import { NODE_ENV } from './secrets';

const context = async ({ req }: { req: Request }): Promise<object> => {
  console.log(req);
  return null;
};

const apolloServer: ApolloServer = new ApolloServer({
  introspection: NODE_ENV === 'development',
  playground: NODE_ENV === 'development',
  validationRules: [depthLimit(7)],
  schema,
  context,
});

export default apolloServer;
