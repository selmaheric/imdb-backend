const db = require('../utils/database');

const getFilteredShows = async ({
  type,
  limit,
  offset,
  search,
  searchByPhrase,
  user,
}) => {
  const dbQueryParams = {
    type,
    limit,
    offset,
  };

  let query = 'SELECT *, release_date::text FROM shows WHERE type = :type';

  if (user) {
    query = `
        SELECT
          *,
          release_date::text,
          (SELECT rating FROM ratings where id_user = :idUser and shows.id = ratings.id_show) as my_rating
        FROM shows WHERE type = :type`;
    dbQueryParams.idUser = user.id;
  }

  let queryCount = 'SELECT count(*) FROM shows where type = :type';

  if (search && !searchByPhrase) {
    const searchArray = search.split(' ');

    const searchFormatted = [];
    for (let i = 0; i < searchArray.length; i += 1) {
      searchFormatted.push(`%${searchArray[i]}%`);
    }

    query += ' AND (title ILIKE ANY (:search) OR description ILIKE ANY (:search))';
    queryCount += ' AND (title ILIKE ANY (:search) OR description ILIKE ANY (:search))';
    dbQueryParams.search = searchFormatted;
  }

  let searchByPhraseValid = true;

  if (search && searchByPhrase) {
    const isBefore = search.includes('before');
    const isAfter = search.includes('after');
    const isStars = search.includes('star');
    if (isBefore || isAfter) {
      /**
      * Handle by date
       */
      const dateMatch = search.match(/ \d+/g);
      const date = dateMatch ? new Date(dateMatch[0]) : null;
      if (!date || Number.isNaN(date.getTime())) {
        searchByPhraseValid = false;
      } else {
        const operator = isBefore ? '<=' : '>=';
        query += ` AND date_trunc('year', release_date::date) ${operator} date_trunc('year', :dateParam::date)`;
        queryCount += ` AND date_trunc('year', release_date::date) ${operator} date_trunc('year', :dateParam::date)`;
        dbQueryParams.dateParam = date;
      }
    } else if (isStars) {
      /**
       * Handle by starts
       */
      const atLeast = search.includes('at least') || search.includes('more than');
      const atMost = search.includes('at most') || search.includes('less than');
      const starsNumber = search.match(/^\d | \d+/g);
      if (!starsNumber) {
        searchByPhraseValid = false;
      } else {
        let operator = '=';
        if (atLeast) {
          operator = '>=';
        }
        if (atMost) {
          operator = '<=';
        }
        query += ` AND average_rating ${operator} :starsParam`;
        queryCount += ` AND average_rating ${operator} :starsParam`;
        dbQueryParams.starsParam = Number(starsNumber[0]);
      }
    } else {
      searchByPhraseValid = false;
    }
  }

  query += ' ORDER BY average_rating DESC, id DESC LIMIT :limit OFFSET :offset';

  const response = await db.connection.raw(query, dbQueryParams);
  const responseCount = await db.connection.raw(queryCount, dbQueryParams);
  const { count } = responseCount.rows[0];

  const shows = searchByPhraseValid ? response.rows : [];

  return {
    shows,
    count,
  };
};

const addShowRating = async ({
  idShow,
  idUser,
  rating,
}) => {
  const trx = await db.connection.transaction();
  try {
    const show = await db.connection('shows')
      .where({ id: idShow })
      .first()
      .transacting(trx)
      .forUpdate();

    const oldRating = await db.connection('ratings')
      .where({
        id_user: idUser,
        id_show: idShow,
      })
      .first()
      .transacting(trx)
      .forUpdate();

    await db.connection('ratings').insert({
      id_user: idUser,
      id_show: idShow,
      rating,
    })
      .onConflict(['id_user', 'id_show'])
      .merge({
        rating,
      })
      .transacting(trx);

    /**
       * If a new rating is added the number of votes is incremented
       * and new rating is added to the total rating.
       * If it was an update of an existing rating then
       * the old rating is substracted and the new rating is added.
       */
    const numOfVotes = oldRating ? +show.number_of_votes : +show.number_of_votes + 1;
    const totalRatingSum = oldRating
      ? +show.total_rating_sum - oldRating.rating + rating
      : +show.total_rating_sum + rating;

    const newShow = await db.connection('shows')
      .update({
        number_of_votes: numOfVotes,
        total_rating_sum: totalRatingSum,
        average_rating: +(totalRatingSum / numOfVotes).toFixed(1),
      })
      .where({ id: idShow })
      .returning('*')
      .transacting(trx);

    await trx.commit();

    return newShow[0];
  } catch (error) {
    await trx.rollback();
    throw error;
  }
};

module.exports = {
  getFilteredShows,
  addShowRating,
};
