"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_firehose_1 = __importDefault(require("winston-firehose"));
const abstract_logger_1 = __importDefault(require("./abstract-logger"));
class FirehoseLogger extends abstract_logger_1.default {
    constructor(config) {
        super();
        this.config = config;
    }
    getLoggerInstance(level) {
        const logger = super.getLoggerInstance(level);
        const { name, region, accessKeyId, secretAccessKey } = this.config;
        logger.add(new winston_firehose_1.default({
            streamName: name,
            firehoseOptions: {
                region,
                accessKeyId,
                secretAccessKey
            }
        }));
        return logger;
    }
}
exports.default = FirehoseLogger;
