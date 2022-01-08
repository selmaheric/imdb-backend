require('dotenv').config();
const config = require('../src/config');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: config.DB_HOST,
      port: config.DB_PORT,
      user: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
    },
    migrations: {
      directory: `${__dirname}/migrations`,
      tableName: 'migrations',
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
};
