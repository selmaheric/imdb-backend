const express = require('express');
const { validateQuery } = require('../middlewares/validation');
const { getShowsSchema } = require('../validation-schemas');

const router = express.Router();

router.get(
  '/',
  validateQuery(getShowsSchema),
  (req, res) => {
    res.send('Get all movies or shows');
  },
);

router.post('/:id/add-rating', (req, res) => {
  res.send('Add rating to a movie or a show');
});

module.exports = router;
