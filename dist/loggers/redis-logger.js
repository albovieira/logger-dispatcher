"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_redis_1 = __importDefault(require("winston-redis"));
const abstract_logger_1 = __importDefault(require("./abstract-logger"));
class RedisLogger extends abstract_logger_1.default {
    constructor(config) {
        super();
        this.config = config;
    }
    getLoggerInstance(level) {
        const logger = super.getLoggerInstance(level);
        const RADIX = 10;
        const port = Number.parseInt(this.config.port, RADIX);
        const { host, container, environment } = this.config;
        logger.add(new winston_redis_1.default({
            host,
            port: Number.isNaN(port) ? null : port,
            container,
            logstash: true,
            useNumericLevel: true,
            fixed: { '@source': environment }
        }));
        return logger;
    }
}
exports.default = RedisLogger;
