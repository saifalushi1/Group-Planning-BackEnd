const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date.UTC,
    //start time, end time, creation time(timestamp)
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: True
    }
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event