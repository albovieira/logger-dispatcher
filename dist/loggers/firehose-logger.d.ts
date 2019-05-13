import * as winston from 'winston';
import AbstractLogger from './abstract-logger';
import { FirehoseConfig } from '../models/firehose-config';
export default class FirehoseLogger extends AbstractLogger {
    private config;
    constructor(config: FirehoseConfig);
    getLoggerInstance(level?: string): winston.Logger;
}
