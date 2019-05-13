import * as winston from 'winston';
import AbstractLogger from './abstract-logger';
import { Config } from '../models/config';

export default class ConsoleLogger extends AbstractLogger {
  private config: Config;
  constructor(config: Config) {
    super();
    this.config = config;
  }

  getLoggerInstance(level?: string): winston.Logger {
    const logger = super.getLoggerInstance(level);
    return logger;
  }
}
