import * as winston from 'winston';
import { LoggerClass } from '../models/logger-class';
export default abstract class AbstractLogger implements LoggerClass {
    getLoggerInstance(level?: string): winston.Logger;
    getFormat(): import("logform").Format;
}
