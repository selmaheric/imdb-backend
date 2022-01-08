exports.up = async function up(knex) {
  await knex.raw(`
  CREATE TABLE IF NOT EXISTS users
  (
    id uuid,
    email character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    google_id character varying(255)
  )`);
};

exports.down = async function down(knex) {
  await knex.raw('DROP TABLE IF EXISTS users');
};
