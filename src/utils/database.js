const knex = require('knex');

const config = require('../config');

class Database {
  constructor() {
    this.db = knex({
      client: 'pg',
      connection: {
        host: config.DB_HOST,
        port: config.DB_PORT,
        user: config.DB_USERNAME,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
      },
    });

    this.db.raw('SELECT 1+1 AS result')
      .then(() => {
        console.log('Successfully connected to postgress!');
      }).catch((error) => {
        console.log('Error connecting postgres! Check configuration!');
        console.log(error.message);
      });
  }
}

module.exports = new Database();
