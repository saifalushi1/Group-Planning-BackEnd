const express = require('express')
const router = express.Router()
const Group = require("../models/Group")
const { requireToken } = require('../middleware/auth')

//create Group
router.post("/", requireToken, async (req, res, next)=> {
    try{
        const newGroup = await Group.create(req.body)
        res.status(201).json(newGroup)
    } catch(err){
        next(err)
    }
})

//Find all of the groups the user is in
router.get("/:id", requireToken, async (req, res, next) => {
    try{
      const userGroups = await Group.find({ members: req.params.id })
      res.json(userGroups)
    } catch(err){
      next(err)
    }
})
//update group setting, name, add members
router.patch("/:groupId", requireToken, async (req, res, next) => {
    try{
        const updateGroup = await Group.findByIdAndUpdate(req.params.groupId,req.body)
        if(updateGroup) {
            res.json(updateGroup)
        } else {
            res.sendStatus(404)
        }
    } catch(err){
        next(err)
    }
})

router.delete("/:groupId", requireToken, async (req, res, next) => {
    try{
        const deleteGroup = await Group.findByIdAndDelete(req.params.groupId)
        if(deleteGroup) {
            res.json(deleteGroup)
        } else {
            res.sendStatus(404)
        }
    } catch(err){
        next(err)
    }
})

module.exports = router
