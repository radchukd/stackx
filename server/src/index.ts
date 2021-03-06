import compression from 'compression';
import cors from 'cors';
import errorHandler from 'errorhandler';
import express, {
  Application,
  Request,
  Response,
} from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import { resolve } from 'path';
import {
  db,
  contextMiddleware,
  graphqlServer,
  CLIENT_HOST,
  CLIENT_PORT,
  SERVER_PORT,
  NODE_ENV,
} from './config';

const app: Application = express();
app.use(cors({ origin: `${CLIENT_HOST}:${CLIENT_PORT}` }));
app.use(compression());
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/graphql', contextMiddleware, graphqlServer);

if (NODE_ENV === 'production') {
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

  app.use(express.static(resolve(__dirname, '../../client/dist')));
  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(resolve(__dirname, '../../client/dist/index.html'));
  });
} else { app.use(errorHandler()); }

app.listen(SERVER_PORT, async () => { await db.init(); });

export default app;
