import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import schema from '../graphql';
import { NODE_ENV, JWT_SECRET } from './secrets';

const context = async ({ req }: { req: Request }) => {
  const token = req.headers && req.headers.authorization;
  if (!token || token === 'null') { return { payload: null }; }
  const payload = verify(token, JWT_SECRET);
  return { payload };
};

const apolloServer = new ApolloServer({
  schema,
  introspection: NODE_ENV === 'development',
  playground: NODE_ENV === 'development',
  validationRules: [depthLimit(7)],
  context,
});

export default apolloServer;
