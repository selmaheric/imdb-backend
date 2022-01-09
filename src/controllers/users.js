const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const db = require('../utils/database');

const router = express.Router();

router.get('/me', authenticate, async (req, res, next) => {
  if (req.user) {
    try {
      const userDb = await db.connection('users').where({ id: req.user.id }).first();
      res.send({
        message: 'Successfully added show rating!',
        data: {
          user: userDb,
        },
      });
    } catch (error) {
      next(error);
    }
  } else {
    next('Not Authenticated');
  }
});

module.exports = router;
