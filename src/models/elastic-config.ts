import { Config } from './config';
export interface ElasticConfig extends Config {
  client: any  // An elasticsearch client instance. If given, all following options are ignored.
  clientOpts: {
    node: string
  } //An object hash passed to the ES client. See its docs for supported options.
  index?: string  // [none] the index to be used. This option is mutually exclusive with indexPrefix.
  indexPrefix?: string // [logs] the prefix to use to generate the index name according to the pattern <indexPrefix>-<indexInterfix>-<indexSuffixPattern>. Can be string or function, returning the string to use.
  indexSuffixPattern?: string // [YYYY.MM.DD] a Moment.js compatible date/ time pattern.
  messageType?: string // [_doc] the type (path segment after the index path) under which the messages are stored under the index.
  transformer: Function // [see below] a transformer function to transform logged data into a different message structure.
  ensureMappingTemplate?: boolean  //[true] If set to true, the given mappingTemplate is checked/ uploaded to ES when the module is sending the fist log message to make sure the log messages are mapped in a sensible manner.
  mappingTemplate?: string // [see file index-template-mapping.json file] the mapping template to be ensured as parsed JSON.
  flushInterval?: number//number [2000] distance between bulk writes in ms.
  waitForActiveShards?: number  //[1] Sets the number of shard copies that must be active before proceeding with the bulk operation.
}
