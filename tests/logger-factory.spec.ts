import { before, describe, it } from 'mocha';
import { expect } from 'chai';
import { LoggerFactory } from './dependencies';

let factory: any;
describe('Unit tests for LoggerFactory', () => {
  before(() => {
    factory = LoggerFactory;
  });

  it('Should create console logger', () => {
    const logger = factory.create('console', {});
    const loggerType = logger.transports[0].name;
    expect(loggerType).eq('console');
    expect(logger.level).eq('info');
  });

  it('Should create firehose logger', () => {
    const logger = factory.create('firehose', {
      level: 'debug',
      name: 'container-name',
      region: 'us-east-1',
      accessKeyId: 'TESTE',
      secretAccessKey: 'TESTE'
    });
    const loggerType = logger.transports[1].name;
    expect(loggerType).eq('FirehoseLogger');
    expect(logger.level).eq('debug');
  });

  it('Should create redis logger', () => {
    const logger = factory.create('redis', {
      level: 'verbose',
      container: 'container-name',
      environment: 'homologation',
      host: 'localhost',
      port: '6379'
    });
    const loggerType = logger.transports[1].name;
    expect(loggerType).eq('redis');
    expect(logger.level).eq('verbose');
  });

  it.only('Should create elastic logger', () => {
    const logger = factory.create('elastic', {
      level: 'verbose',
      clientOpts: {
        node: 'http://localhost:9200'
      }
    });
    const loggerType = logger.transports[1].name;
    expect(loggerType).eq('elasticsearch');
    expect(logger.level).eq('verbose');
  });
});
