declare module 'winston-firehose' {
  interface WinstonFirehose {
    Redis: any;
  }

  const WinstonFirehose: WinstonFirehose;
  export = WinstonFirehose;
}
