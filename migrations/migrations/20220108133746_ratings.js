exports.up = async function up(knex) {
  await knex.raw(`
    CREATE TABLE IF NOT EXISTS ratings
    (
      id_user uuid NOT NULL,
      id_show uuid NOT NULL,
      rating smallint CHECK (rating > 0 AND rating < 6),
      PRIMARY KEY(id_user, id_show),
      CONSTRAINT no_duplicate_key_rating UNIQUE (id_user, id_show),
      CONSTRAINT id_user FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
      CONSTRAINT id_show FOREIGN KEY (id_show)
        REFERENCES shows (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
    )`);
};

exports.down = async function down(knex) {
  await knex.raw('DROP TABLE IF EXISTS ratings');
};
