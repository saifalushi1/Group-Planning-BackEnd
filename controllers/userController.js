const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { createUserToken } = require('../middleware/auth')
const { requireToken } = require('../middleware/auth')
const bcrypt = require('bcrypt')

//Creates user account info then hashes/salts passowrd
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
})


//finds a user in the db from the email provided. If login credentials are correct it generates a token otherwise throws an error("user info incorre") 
router.post('/signin', async (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then((user) => createUserToken(req, user)) 
  .then((token) => res.json({ token }))
  .catch(next)
})

// //after login make this call to find the user's info 
//***** when the user clicks login we will make two axios requests 1.)create token(above) 
// 2.)find the user from the email input and store their _id in state
router.get("/users/:username",  async (req, res, next) => {
  try{
    const findUser = await User.findOne({ email: req.params.username })
    res.json(findUser)
    console.log(req.body)
  } catch(err){
    next(err)
  }
})

// get request for user info by id
router.get('users/:id', requireToken, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id) 
if(user) {
    res.json(user)
} else {
    res.sendStatus(404)
}
} catch(err) {
    next(err)
}
})

// change request for user info 
router.patch('/users/:id', requireToken, async (req, res, next) => {
  try {
    const userToUpdate = await User.findByIdAndUpdate( req.params.id,
      req.body,
  ) 
if(user) {
    res.json(userToUpdate)
} else {
    res.sendStatus(404)
}
} catch(err) {
    next(err)
}
})

router.delete("/users/:id", requireToken, async (req, res, next) => {
  try{
    const userToDelete = await User.findByIdAndDelete(req.params.id)
  } catch(err){
    next(err)
  }
})


module.exports = router