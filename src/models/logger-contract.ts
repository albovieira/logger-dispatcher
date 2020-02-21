import { Logger } from 'winston';
import { Config } from './config';

export interface LoggerContract {
  getLoggerInstance(level?: string): Logger;
}
