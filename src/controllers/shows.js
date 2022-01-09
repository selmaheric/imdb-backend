const express = require('express');
const { validateQuery, validateBody, validateParams } = require('../middlewares/validation');
const { getShowsSchema, addRatingSchema } = require('../validation-schemas');
const db = require('../utils/database');

const router = express.Router();

router.get(
  '/',
  validateQuery(getShowsSchema),
  async (req, res) => {
    const {
      type, limit, offset, search, searchByPhrase,
    } = req.query;

    const dbQueryParams = {
      type,
      limit,
      offset,
    };

    let query = 'SELECT *, release_date::text FROM shows WHERE type = :type';
    const queryCount = 'SELECT * FROM shows where type = :type';

    if (search && !searchByPhrase) {
      const searchArray = search.split(' ');

      const searchFormatted = [];
      for (let i = 0; i < searchArray.length; i += 1) {
        searchFormatted.push(`%${searchArray[i]}%`);
      }

      query += ' AND (title ILIKE ANY (:search) OR description ILIKE ANY (:search))';
      dbQueryParams.search = search;
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
          dbQueryParams.starsParam = Number(starsNumber[0]);
        }
      } else {
        searchByPhraseValid = false;
      }
    }

    query += ' ORDER BY average_rating DESC LIMIT :limit OFFSET :offset';

    const response = await db.connection.raw(query, dbQueryParams);
    const responseCount = await db.connection.raw(queryCount, { type });

    const shows = searchByPhraseValid ? response.rows : [];

    res.send({
      message: 'Successfully fetched shows!',
      data: {
        shows,
        limit,
        offset,
        count: responseCount.rowCount,
      },
    });
  },
);

router.post(
  '/:id/add-rating',
  validateParams({ id: { type: 'uuid' } }),
  validateBody(addRatingSchema),
  async (req, res, next) => {
    const { user: { id: idUser } } = req;
    const { id: idShow } = req.params;
    const { rating } = req.body;

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

      const numOfVotes = oldRating ? +show.number_of_votes : +show.number_of_votes + 1;
      const totalRatingSum = oldRating
        ? +show.total_rating_sum - oldRating.rating + rating
        : +show.total_rating_sum + rating;

      await db.connection('shows')
        .update({
          number_of_votes: numOfVotes,
          total_rating_sum: totalRatingSum,
          average_rating: +(totalRatingSum / numOfVotes).toFixed(1),
        })
        .where({ id: idShow })
        .transacting(trx);

      await trx.commit();

      res.send({
        message: 'Successfully added show rating!',
      });
    } catch (error) {
      await trx.rollback();
      next(error);
    }
  },
);

module.exports = router;
