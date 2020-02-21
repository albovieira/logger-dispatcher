import * as winston from 'winston';
import WinstonRedis from 'winston-redis';
import { RedisConfig } from '../models/redis-config';
import AbstractLogger from './abstract-logger';
import { LoggerContract } from '../models/logger-contract';

export default class RedisLogger extends AbstractLogger {
  private config: RedisConfig;
  constructor(config: RedisConfig) {
    super();
    this.config = config;
  }

  getLoggerInstance(level?: string): winston.Logger {
    const logger = super.getLoggerInstance(level);
    const RADIX = 10;
    const port = Number.parseInt(this.config.port!, RADIX);
    const { host, container, environment } = this.config;
    logger.add(
      new (<any>WinstonRedis)({
        host,
        port: Number.isNaN(port) ? null : port,
        container,
        logstash: true,
        useNumericLevel: true,
        fixed: { '@source': environment }
      })
    );

    return logger;
  }
}
