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
  DB_NAME,
  JWT_SECRET,
  JWT_EXPIRY,
} = process.env;

if (!SERVER_HOST || !SERVER_PORT) {
  logger.error('Port/host is not set');
  process.exit(1);
}

if (!DB_URI || !DB_NAME) {
  logger.error('Database uri/name is not set');
  process.exit(1);
}
