const express = require('express')
const router = express.Router()
const User = require('../models/User')

const bcrypt = require('bcrypt')


router.post('/', async (req, res, next) => {
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

// router.get("/", )
// router.post('/signup', (req, res, next) => {
//     bcrypt
//       .hash(req.body.password, 10)
//       // return a new object with the email and hashed password
//       .then(hash =>
//         // when returning an object with fat arrow syntax, we
//         // need to wrap the object in parentheses so JS doesn't
//         // read the object curly braces as the function block
//         ({
//           email: req.body.email,
//           name: req.body.name,
//           password: hash
//         })
//       )
//       // create user with provided email and hashed password
//       .then(user => User.create(user))
//       // send the new user object back with status 201, but `hashedPassword`
//       // won't be sent because of the `transform` in the User model
//       .then(user => res.status(201).json(user))
//       // pass any errors along to the error handler
//       .catch(next);
//   });

module.exports = router