const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const usersService = require('../services/users.service');

const router = express.Router();

router.get('/me', authenticate, async (req, res, next) => {
  try {
    const user = await usersService.getUserById({ idUser: req.user.id });
    res.send({
      message: 'Successfully added show rating!',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
