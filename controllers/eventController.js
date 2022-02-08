const express = require('express');
const router = express.Router();
const { requireToken } = require('../middleware/auth');

const Event = require("../models/Event")

router.get('/', requireToken, (req, res, next) => {
    Event.find()
      .then((events) => res.json(events))
      .catch(next);
  });

  module.exports = router