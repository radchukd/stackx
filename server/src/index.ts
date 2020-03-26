import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { MongoNetworkError } from 'mongodb';
import { resolve } from 'path';
import dbClient from './config/db';
import logger from './config/logger';
import typeDefs from './typedefs';
import resolvers from './resolvers';
import {
  CLIENT_HOST,
  CLIENT_PORT,
  SERVER_PORT,
  NODE_ENV,
  SERVER_HOST
} from './config/secrets';

const app = express();
app.use(cors({ origin: `${CLIENT_HOST}:${CLIENT_PORT}` }));
app.use(compression());
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const schema = makeExecutableSchema({ typeDefs, resolvers });
app.use('/graphql', graphqlExpress({ schema }));

if (NODE_ENV === 'production') {
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

  app.use(express.static(resolve(__dirname, '../../client/dist')));
  app.get('*', (_req, res) => {
    res.sendFile(resolve(__dirname, '../../client/dist/index.html'));
  });
} else {
  app.use(errorHandler());
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

dbClient.connect((error: MongoNetworkError) => {
  if (error) { logger.error(error.message); }
  logger.info('Connected to MongoDb.');

  app.listen(SERVER_PORT, () => {
    logger.info(`Server is running on ${SERVER_HOST}:${SERVER_PORT}.`);
  });
  dbClient.close();
});

export default app;
