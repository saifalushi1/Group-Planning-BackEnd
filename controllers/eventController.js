const express = require('express')
const router = express.Router()
const { requireToken } = require('../middleware/auth')

const Event = require("../models/Event")

// Get request to view events
router.get("/:id", requireToken, async (req, res, next) => {
  try{
    const userEvents = Event.findById(req.params.id)
    res.json(userEvents)
  } catch(err){
    next(err)
  }
})

// Post request to create new event
router.post('/', async (req, res, next) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(201).json(newEvent)
    } catch(err) {
        next(err)
    }
})

// Patch request to update event
router.patch('/userEvents/:id', async (req, res, next) => {
  try {
      const eventToUpdate = await Event.findOneAndUpdate(
          req.params.id, req.body, {new: true}
      )
      if (eventToUpdate) {
          res.json(eventToUpdate)
      } else {
          res.sendStatus(404)
      }
  } catch (err) {
      next(err)
  }
})

// Delete request to delete event
router.delete('/:id', requireToken, async (req, res, next) => {
  try {
    const eventToDelete = await Event.findByIdAndDelete(req.params.id)
    console.log(eventToDelete)
    if (eventToDelete) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

  module.exports = router