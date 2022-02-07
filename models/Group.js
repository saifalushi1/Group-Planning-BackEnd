const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    name: String,
    members: [Objects],
    events: [Objects],
    timestamps: true
})

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group