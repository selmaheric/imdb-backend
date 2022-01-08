exports.seed = async function seed(knex) {
  // Deletes ALL existing users
  await knex('users').del();
  await knex('users').insert([
    {
      id: '55a10044-4989-4deb-9348-7836f929cf04',
      first_name: 'Selma',
      last_name: 'Heric',
      email: 'selma.heric@gmail.com',
      google_id: 'jedan',
    },
  ]);
};
