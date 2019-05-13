"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_logger_1 = __importDefault(require("./abstract-logger"));
class ConsoleLogger extends abstract_logger_1.default {
    constructor(config) {
        super();
        this.config = config;
    }
    getLoggerInstance(level) {
        const logger = super.getLoggerInstance(level);
        return logger;
    }
}
exports.default = ConsoleLogger;
