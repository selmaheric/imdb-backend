const express = require('express');

const router = express.Router();

router.get('/me', (req, res, next) => {
  if (req.user) {
    res.send({
      id: 1,
      first_name: 'Selma',
      last_name: 'Heric',
    });
  } else {
    next('Not Authenticated');
  }
});

module.exports = router;
