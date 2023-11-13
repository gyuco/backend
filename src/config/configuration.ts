const sharedConfig = {
  version: '0.0.1',
};

export default () => {
  const environment = process.env.NODE_ENV || 'local';

  switch (environment) {
    case 'local':
      return {
        ...sharedConfig,
        port: 3001,
        database: {
          host: process.env.DATABASE_HOST,
          port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        },
      };
    case 'dev':
      return {
        ...sharedConfig,
        port: 3002,
        database: {
          host: process.env.DATABASE_HOST,
          port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        },
      };
    case 'prod':
      return {
        ...sharedConfig,
        port: 3003,
        database: {
          host: process.env.DATABASE_HOST,
          port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        },
      };
    default:
      throw new Error(`Invalid environment: ${environment}`);
  }
};
