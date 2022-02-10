const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    name: String,
    members: [{
        name: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    events: [Object],
    timestamps: true
})

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group