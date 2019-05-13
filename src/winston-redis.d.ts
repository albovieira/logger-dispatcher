declare module 'winston-redis' {
  interface WinstonRedis {
    Redis: any;
  }

  const WinstonRedis: WinstonRedis;
  export = WinstonRedis;
}
