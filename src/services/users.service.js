const { v4: uuidv4 } = require('uuid');
const db = require('../utils/database');

const getUserById = async ({ idUser = null }) => {
  const userDb = await db.connection('users').where({ id: idUser }).first();
  return userDb;
};

const upsertUserByGoogleId = async (profile) => {
  const defaultUser = {
    id: uuidv4(),
    first_name: profile.name.givenName,
    last_name: profile.name.familyName,
    email: profile.emails[0].value,
    google_id: profile.id,
  };

  const userDb = await db.connection('users').where({ google_id: defaultUser.google_id }).first();
  if (!userDb) {
    const newUser = await db.connection('users').insert(defaultUser).returning('*');
    return newUser[0];
  }

  return userDb;
};
module.exports = {
  getUserById,
  upsertUserByGoogleId,
};
