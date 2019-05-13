import * as winston from 'winston';
import AbstractLogger from './abstract-logger';
import { Config } from '../models/config';
export default class ConsoleLogger extends AbstractLogger {
    private config;
    constructor(config: Config);
    getLoggerInstance(level?: string): winston.Logger;
}
