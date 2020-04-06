import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import schema from '../graphql';
import { NODE_ENV, JWT_SECRET } from './secrets';

const context = async ({ req }: { req: Request }): Promise<object> => {
  const token: string = req.headers && req.headers.authorization;
  try {
    const payload: object = verify(token, JWT_SECRET) as object;
    return { payload };
  } catch (e) {
    return { payload: null };
  }
};

const apolloServer: ApolloServer = new ApolloServer({
  introspection: NODE_ENV === 'development',
  playground: NODE_ENV === 'development',
  validationRules: [depthLimit(7)],
  schema,
  context,
});

export default apolloServer;
