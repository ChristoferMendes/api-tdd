const knexfile = {
  test: {
    client: 'pg',
    version: '14.2-alpine',
    connection: {
      host: 'localhost',
      user: 'mmtec',
      password: '36257',
      database: 'db',
    },
    migrations: {
      directory: './src/migrations',
    },
  },
};

export default knexfile;
