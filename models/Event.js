const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    startTime: Number,
    endTime: Number,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
},
// {TimeStamp: true}
)

const Event = mongoose.model('Event', EventSchema)

module.exports = Event