import { Config } from './models/config';
export interface ConfigProvider {
    name: string;
    enabled: boolean;
    config?: Object;
}
export declare enum LoggerTypes {
    CONSOLE = "console",
    REDIS = "redis",
    FIREHOSE = "firehose"
}
export declare class LoggerFactory {
    static create(loggerType: string, config: Config): any;
}
