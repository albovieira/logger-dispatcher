import * as winston from 'winston';
import { LoggerContract } from '../models/logger-contract';
import { LoggerLevels } from '../models/logger-levels';

export default abstract class AbstractLogger {
  getLoggerInstance(level?: string): winston.Logger {
    const logger = winston.createLogger({
      level: level || LoggerLevels.info,
      exitOnError: false
    });
    const format = this.getFormat();
    logger.add(
      new winston.transports.Console({ format, handleExceptions: true })
    );
    return logger;
  }

  getFormat() {
    return winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(
        (info: any) => `${info.timestamp} ${info.level}: ${info.message}`
      )
    );
  }
}
