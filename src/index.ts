import { Provider } from './models/provider';
import { Config } from './models/config';
import RedisLogger from './loggers/redis-logger';
import FirehoseLogger from './loggers/firehose-logger';
import ConsoleLogger from './loggers/console-logger';
import AbstractLogger from './loggers/abstract-logger';
import { Logger } from 'winston';

export interface ConfigProvider {
  name: string;
  enabled: boolean;
  config?: Object;
}

export enum LoggerTypes {
  CONSOLE = 'console',
  REDIS = 'redis',
  FIREHOSE = 'firehose'
}

export class LoggerFactory {
  static create(loggerType: string, config: Config): Logger {
    const logProviders: Provider[] = [
      { type: LoggerTypes.REDIS, class: RedisLogger },
      { type: LoggerTypes.FIREHOSE, class: FirehoseLogger }
    ];

    const defaultProvider: Provider = {
      type: LoggerTypes.CONSOLE,
      class: ConsoleLogger
    };

    const provider: Provider =
      logProviders.find(p => p.type === loggerType) || defaultProvider;

    try {
      const { level } = config;
      const logger = new provider.class(config).getLoggerInstance(level);
      return logger;
    } catch (error) {
      console.error(
        `Can not add Winston transport to logger: ${error.message}`
      );
    }
  }
}
