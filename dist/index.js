"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_logger_1 = __importDefault(require("./loggers/redis-logger"));
const firehose_logger_1 = __importDefault(require("./loggers/firehose-logger"));
const console_logger_1 = __importDefault(require("./loggers/console-logger"));
var LoggerTypes;
(function (LoggerTypes) {
    LoggerTypes["CONSOLE"] = "console";
    LoggerTypes["REDIS"] = "redis";
    LoggerTypes["FIREHOSE"] = "firehose";
})(LoggerTypes = exports.LoggerTypes || (exports.LoggerTypes = {}));
class LoggerFactory {
    static create(loggerType, config) {
        const logProviders = [
            { type: LoggerTypes.REDIS, class: redis_logger_1.default },
            { type: LoggerTypes.FIREHOSE, class: firehose_logger_1.default }
        ];
        const defaultProvider = {
            type: LoggerTypes.CONSOLE,
            class: console_logger_1.default
        };
        const provider = logProviders.find(p => p.type === loggerType) || defaultProvider;
        try {
            const { level } = config;
            const logger = new provider.class(config).getLoggerInstance(level);
            return logger;
        }
        catch (error) {
            console.error(`Cannot add Winston transport to logger: ${error.message}`);
        }
    }
}
exports.LoggerFactory = LoggerFactory;
