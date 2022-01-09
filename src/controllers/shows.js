const express = require('express');
const { validateQuery } = require('../middlewares/validation');
const { getShowsSchema } = require('../validation-schemas');
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
      data: {
        shows,
        limit,
        offset,
        count: responseCount.rowCount,
      },
    });
  },
);

router.post('/:id/add-rating', (req, res) => {
  res.send('Add rating to a movie or a show');
});

module.exports = router;
