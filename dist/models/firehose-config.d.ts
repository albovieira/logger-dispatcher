import { Config } from './config';
export interface FirehoseConfig extends Config {
    name: string;
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
}
