const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { validateQuery, validateBody, validateParams } = require('../middlewares/validation');
const { getShowsSchema, addRatingSchema } = require('../validation-schemas');

const showsService = require('../services/shows.service');

const db = require('../utils/database');

const router = express.Router();

router.get(
  '/',
  validateQuery(getShowsSchema),
  async (req, res, next) => {
    try {
      const {
        type, limit, offset, search, searchByPhrase,
      } = req.query;

      const { shows, count } = await showsService.getFilteredShows({
        type,
        limit,
        offset,
        search,
        searchByPhrase,
        user: req.user,
      });

      res.send({
        message: 'Successfully fetched shows!',
        data: {
          shows,
          limit,
          offset,
          count: +count,
          totalPages: count % limit === 0 ? count / limit : Math.floor(count / limit) + 1,
        },
      });
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/:id/add-rating',
  authenticate,
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

      res.send({
        message: 'Successfully added show rating!',
        data: {
          show: newShow && newShow[0],
        },
      });
    } catch (error) {
      await trx.rollback();
      next(error);
    }
  },
);

module.exports = router;
