import { createLogger, format, transports } from 'winston';
import { resolve } from 'path';
import { NODE_ENV } from './secrets';

const logger = createLogger({
  level: NODE_ENV === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json(),
  ),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
      ),
    }),
    new transports.File({ filename: resolve(__dirname, '../run.log') }),
  ],
});

if (NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

export default logger;
