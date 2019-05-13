import { Config } from './config';
export interface RedisConfig extends Config {
  container: string;
  environment: string;
  host: string;
  port: string;
}
