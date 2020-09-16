# Logger Dispatcher [![npm version](https://badge.fury.io/js/logger-dispatcher.svg)](//npmjs.com/package/logger-dispatcher)

> An abstraction for winston logger, with this package we can just inform the transporter and it will provide a winston instance configured

**It suports**

- Console
- Redis
- Firehose
- Elastic

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger)

## Sumary

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

---

## Installation

```shell
$ npm install logger-dispatcher
```

## Usage

#### Local

```javascript
/** logger is an instance of winston with local console as a transporter **/
const logger = factory.create('console', {
  level: 'verbose'
});
```

#### Firehose

```javascript
/** logger is an instance of winston with firehose as a transporter **/
const logger = factory.create('console', {
  level: 'debug',
  name: 'container-name',
  region: 'us-east-1',
  accessKeyId: 'AWS_KEY',
  secretAccessKey: 'AWS_SECRET'
});
```

#### Redis

```javascript
/** logger is an instance of winston with redis as a transporter **/
const logger = factory.create('redis', {
  level: 'verbose',
  container: 'container-name',
  environment: 'homologation',
  host: 'redis-host.com.br',
  port: '6379'
});
```

## Features

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
