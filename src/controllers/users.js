const express = require('express');

const router = express.Router();

router.get('/me', (req, res) => {
  res.send('Get logged in user');
});

module.exports = router;
