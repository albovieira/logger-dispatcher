import * as winston from 'winston';
import { RedisConfig } from '../models/redis-config';
import AbstractLogger from './abstract-logger';
export default class RedisLogger extends AbstractLogger {
    private config;
    constructor(config: RedisConfig);
    getLoggerInstance(level?: string): winston.Logger;
}
