const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all movies or shows');
});

router.post('/:id/add-rating', (req, res) => {
  res.send('Add rating to a movie or a show');
});

module.exports = router;
