# logger-dispatcher

This is an abstraction for winston logger, with this package we can just inform the transporter and it will provide a winston instance configured

Install with:

```
npm install logger-dispatcher
```

# Usage

## Local

```
    /** logger is an instance of winston with local console as a transporter **/
    const logger = factory.create('console', {
      level: 'verbose',
    });
```

## Firehose

```
    /** logger is an instance of winston with firehose as a transporter **/
    const logger = factory.create('console', {
      level: 'debug',
      name: 'container-name',
      region: 'us-east-1',
      accessKeyId: 'AWS_KEY',
      secretAccessKey: 'AWS_SECRET'
    });
```

## Redis

```
    /** logger is an instance of winston with redis as a transporter **/
    const logger = factory.create('redis', {
      level: 'verbose',
      container: 'container-name',
      environment: 'homologation',
      host: 'redis-host.com.br',
      port: '6379'
    });
```
