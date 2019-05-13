"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
const logger_levels_1 = require("../models/logger-levels");
class AbstractLogger {
    getLoggerInstance(level) {
        const logger = winston.createLogger({
            level: level || logger_levels_1.LoggerLevels.info,
            exitOnError: false
        });
        const format = this.getFormat();
        logger.add(new winston.transports.Console({ format, handleExceptions: true }));
        return logger;
    }
    getFormat() {
        return winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
    }
}
exports.default = AbstractLogger;
