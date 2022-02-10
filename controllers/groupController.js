const express = require('express')
const router = express.Router()
const Group = require("../models/Group")
const { requireToken } = require('../middleware/auth')

//Find all of the groups the user is in
router.get("/:id", requireToken, async (req, res, next) => {
    try{
      const userGroups = await Group.find({ members: req.params.id })
      res.json(userGroups)
    } catch(err){
      next(err)
    }
})
router.patch("/:groupId", requireToken, async (req, res, next) => {
    try{
        const updateGroup = await Group.findByIdAndUpdate(req.params.groupId, req.body)
    } catch(err){
        next(err)
    }
})

module.exports = router
