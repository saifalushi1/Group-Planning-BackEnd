const express = require('express')
const router = express.Router()
const User = require('../models/User')

const bcrypt = require('bcrypt')


router.post('/signup', async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10)
    const email = req.body.email
    const name = req.body.name
    const user = await User.create({ email, password, name })
    res.status(201).json(user)
  } catch (error) {
    return next(error)
  }
});

const { createUserToken } = require('../middleware/auth');

router.post('/signin', (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then(() => console.log("im signed in"))
  .then((user) => createUserToken(req, res, next))
  .then((token) => res.json({ token }))
  .catch(next) 
})




module.exports = router