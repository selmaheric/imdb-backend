const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { validateQuery, validateBody, validateParams } = require('../middlewares/validation');
const { getShowsSchema, addRatingSchema } = require('../validation-schemas');
const showsService = require('../services/shows.service');

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

    try {
      const show = await showsService.addShowRating({
        idUser,
        idShow,
        rating,
      });
      res.send({
        message: 'Successfully added show rating!',
        data: {
          show,
        },
      });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
