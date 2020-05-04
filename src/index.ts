import { Logger } from 'winston';
import { Provider } from './models/provider';
import RedisLogger from './loggers/redis-logger';
import FirehoseLogger from './loggers/firehose-logger';
import ConsoleLogger from './loggers/console-logger';
import { RedisConfig } from './models/redis-config';
import { FirehoseConfig } from './models/firehose-config';
import { Config } from './models/config';
import ElasticLogger from './loggers/elastic-logger';
import { ElasticConfig } from './models/elastic-config';

export interface ConfigProvider {
  name: string;
  enabled: boolean;
  config?: RedisConfig | FirehoseConfig | ElasticConfig | Config;
}

export enum LoggerTypes {
  CONSOLE = 'console',
  REDIS = 'redis',
  FIREHOSE = 'firehose',
  ELASTIC = 'elastic',
}

export class LoggerFactory {
  static create(loggerType: string, config: Config): Logger {
    const logProviders: Provider[] = [
      { type: LoggerTypes.ELASTIC, class: ElasticLogger },
      { type: LoggerTypes.REDIS, class: RedisLogger },
      { type: LoggerTypes.FIREHOSE, class: FirehoseLogger },
    ];

    const defaultProvider: Provider = {
      type: LoggerTypes.CONSOLE,
      class: ConsoleLogger,
    };

    const provider: Provider =
      logProviders.find((p) => p.type === loggerType) || defaultProvider;

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
