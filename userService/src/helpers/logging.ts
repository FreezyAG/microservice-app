import winston from 'winston';

const { LOG_LEVEL = 'debug' } = process.env;

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.printf(info => {
      const { timestamp, level, message, ...args } = info;

      return `${timestamp} [${level}]: ${
        typeof message === 'object'
          ? JSON.stringify({ ...{ message }, ...args })
          : `${message}${
              args && Object.keys(args).length > 0
                ? ` - ${JSON.stringify(args)}`
                : ''
            }`
      }`;
    })
  ),
  transports: [
    new winston.transports.Console({
      level: LOG_LEVEL !== 'silent' ? LOG_LEVEL : 'debug',
      handleExceptions: true,
      silent: LOG_LEVEL === 'silent'
    })
  ],
  exitOnError: false
});

// we use this for morgan logging
export class LoggingStream {
  write(message: string) {
    logger.info(message);
  }
}

export default logger;
