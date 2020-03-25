import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

export const {
  NODE_ENV,
  CLIENT_HOST,
  CLIENT_PORT,
  SERVER_HOST,
  SERVER_PORT,
  DB_URI,
} = process.env;

if (!SERVER_HOST || !SERVER_PORT) {
  logger.error('Port is not set');
  process.exit(1);
}

if (!DB_URI) {
  logger.error('Database uri is not set');
  process.exit(1);
}
