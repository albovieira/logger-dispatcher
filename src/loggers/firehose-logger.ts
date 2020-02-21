import * as winston from 'winston';
import WinstonFirehose from 'winston-firehose';
import AbstractLogger from './abstract-logger';
import { FirehoseConfig } from '../models/firehose-config';
import { LoggerContract } from '../models/logger-contract';

export default class FirehoseLogger extends AbstractLogger {
  private config: FirehoseConfig;
  constructor(config: FirehoseConfig) {
    super();
    this.config = config;
  }

  getLoggerInstance(level?: string): winston.Logger {
    const logger = super.getLoggerInstance(level);
    const { name, region, accessKeyId, secretAccessKey } = this.config;
    logger.add(
      new (<any>WinstonFirehose)({
        streamName: name,
        firehoseOptions: {
          region,
          accessKeyId,
          secretAccessKey
        }
      })
    );

    return logger;
  }
}
