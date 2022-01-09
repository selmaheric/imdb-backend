exports.up = async function up(knex) {
  await knex.raw("CREATE TYPE show_type AS ENUM ('movie', 'tv_show')");

  await knex.raw(`
    CREATE TABLE IF NOT EXISTS shows
    (
      id uuid,
      type show_type NOT NULL,
      title character varying(255) NOT NULL,
      description character varying(255) NOT NULL,
      release_date DATE NOT NULL,
      cover_image character varying(255) NOT NULL,
      number_of_votes bigint NOT NULL DEFAULT 0,
      total_rating_sum bigint NOT NULL DEFAULT 0,
      average_rating numeric NOT NULL DEFAULT 0,
      CONSTRAINT movies_pkey PRIMARY KEY (id)
    )`);

  await knex.raw(`
    CREATE TABLE IF NOT EXISTS actors
    (
      id uuid,
      first_name character varying(255) NOT NULL,
      last_name character varying(255) NOT NULL,
      CONSTRAINT actors_pkey PRIMARY KEY (id)
    )`);

  await knex.raw(`
    CREATE TABLE IF NOT EXISTS show_cast
    (
      id_show uuid NOT NULL,
      id_actor uuid NOT NULL,
      PRIMARY KEY(id_show, id_actor),
      CONSTRAINT no_duplicate_key_cast UNIQUE (id_show, id_actor),
      CONSTRAINT id_show FOREIGN KEY (id_show)
        REFERENCES shows (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
      CONSTRAINT id_actor FOREIGN KEY (id_actor)
        REFERENCES actors (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
    )`);
};

exports.down = async function down(knex) {
  await knex.raw('DROP TABLE IF EXISTS show_cast');
  await knex.raw('DROP TABLE IF EXISTS shows');
  await knex.raw('DROP TABLE IF EXISTS actors');
  await knex.raw('DROP TYPE IF EXISTS show_type');
};
