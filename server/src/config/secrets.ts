import dotenv from 'dotenv';

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
