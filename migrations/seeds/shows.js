const { v4: uuidv4 } = require('uuid');

const SELMA_HERIC = uuidv4();

const GOOD_WILL_HUNTING = uuidv4();
const THE_BOURNE_IDENTITY = uuidv4();
const SAVING_PRIVATE_RYAN = uuidv4();
const FOREST_GUMP = uuidv4();

const MAT_DAMON = uuidv4();
const BEN_AFFLECK = uuidv4();
const ROBIN_WILLIAMS = uuidv4();
const FRANKA_POTENTE = uuidv4();
const TOM_HANKS = uuidv4();
const ROBIN_WRIGHT = uuidv4();

exports.seed = async function seed(knex) {
  // Deletes ALL existing cast, actors and shows
  await knex('show_cast').del();
  await knex('ratings').del();
  await knex('actors').del();
  await knex('shows').del();
  await knex('users').del();

  // Insert users
  await knex('users').insert([
    {
      id: SELMA_HERIC,
      first_name: 'Selma',
      last_name: 'Heric',
      email: 'selma.heric@gmail.com',
      google_id: 'jedan',
    },
  ]);

  // Insert shows
  await knex('shows').insert([
    {
      id: GOOD_WILL_HUNTING,
      type: 'movie',
      title: 'Good Will Hunting',
      description: 'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.',
      release_date: '2 December 1997',
      cover_image: 'cover_image',
    },
    {
      id: THE_BOURNE_IDENTITY,
      type: 'movie',
      title: 'The Bourne Identity',
      description: 'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.',
      release_date: '6 June 2002',
      cover_image: 'cover_image',
    },
    {
      id: SAVING_PRIVATE_RYAN,
      type: 'movie',
      title: 'Saving Private Ryan',
      description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
      release_date: '21 July 1998',
      cover_image: 'cover_image',
    },
    {
      id: FOREST_GUMP,
      type: 'movie',
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      release_date: '23 June 1994',
      cover_image: 'cover_image',
    },
  ]);

  await knex('actors').insert([
    {
      id: MAT_DAMON,
      first_name: 'Matt',
      last_name: 'Damon',
    },
    {
      id: ROBIN_WILLIAMS,
      first_name: 'Robin',
      last_name: 'Williams',
    },
    {
      id: BEN_AFFLECK,
      first_name: 'Ben',
      last_name: 'Affleck',
    },
    {
      id: FRANKA_POTENTE,
      first_name: 'Franka',
      last_name: 'Potente',
    },
    {
      id: TOM_HANKS,
      first_name: 'Tom',
      last_name: 'Hanks',
    },
    {
      id: ROBIN_WRIGHT,
      first_name: 'Robin',
      last_name: 'Wright',
    },
  ]);

  await knex('show_cast').insert([
    /**
     * Good Will Hunting Cast
     */
    {
      id_show: GOOD_WILL_HUNTING,
      id_actor: MAT_DAMON,
    },
    {
      id_show: GOOD_WILL_HUNTING,
      id_actor: ROBIN_WILLIAMS,
    },
    {
      id_show: GOOD_WILL_HUNTING,
      id_actor: BEN_AFFLECK,
    },
    /**
    * The Bourne Identity Cast
    */
    {
      id_show: THE_BOURNE_IDENTITY,
      id_actor: MAT_DAMON,
    },
    {
      id_show: THE_BOURNE_IDENTITY,
      id_actor: FRANKA_POTENTE,
    },
    /**
    * Saving Private Ryan Cast
    */
    {
      id_show: SAVING_PRIVATE_RYAN,
      id_actor: MAT_DAMON,
    },
    {
      id_show: SAVING_PRIVATE_RYAN,
      id_actor: TOM_HANKS,
    },
    /**
    * Forest Gump Cast
    */
    {
      id_show: FOREST_GUMP,
      id_actor: TOM_HANKS,
    },
    {
      id_show: FOREST_GUMP,
      id_actor: ROBIN_WRIGHT,
    },
  ]);

  await knex('ratings').insert([
    /**
     * Good Will Hunting Rating
     */
    {
      id_user: SELMA_HERIC,
      id_show: GOOD_WILL_HUNTING,
      rating: 5,
    },
    /**
    * The Bourne Identity Rating
    */
    {
      id_user: SELMA_HERIC,
      id_show: THE_BOURNE_IDENTITY,
      rating: 3,
    },
    /**
    * Saving Private Ryan Rating
    */
    {
      id_user: SELMA_HERIC,
      id_show: SAVING_PRIVATE_RYAN,
      rating: 4,
    },
    /**
    * Forest Gump Rating
    */
    {
      id_user: SELMA_HERIC,
      id_show: FOREST_GUMP,
      rating: 5,
    },
  ]);

  const ratingSumAndCount = await knex.raw('select sum(rating), count(*), id_show from ratings group by id_show');

  for (let i = 0; i < ratingSumAndCount.rows.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await knex('shows').update({
      number_of_votes: Number(ratingSumAndCount.rows[i].count),
      total_rating_sum: Number(ratingSumAndCount.rows[i].sum),
      average_rating: +(ratingSumAndCount.rows[i].sum / ratingSumAndCount.rows[i].count).toFixed(1),
    }).where({
      id: ratingSumAndCount.rows[i].id_show,
    });
  }
};
