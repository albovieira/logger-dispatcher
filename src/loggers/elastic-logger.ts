import * as winston from 'winston';
import { ElasticsearchTransport as  WinstonElastic } from 'winston-elasticsearch';
import { ElasticConfig } from '../models/elastic-config';
import AbstractLogger from './abstract-logger';

export default class ElasticLogger extends AbstractLogger {
  private config: ElasticConfig;
  constructor(config: ElasticConfig) {
    super();
    this.config = config;
  }

  getLoggerInstance(level?: string): winston.Logger {
    const logger = super.getLoggerInstance(level);
    const { clientOpts } = this.config;
    logger.add( 
      new (<any>WinstonElastic)({
        level,
        clientOpts,
        ...this.config
      })
    );

    return logger;
  }
}
