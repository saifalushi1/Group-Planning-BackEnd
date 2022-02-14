const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startTime: String,
    endTime: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
},
    // {timestamps: true}
)

const Event = mongoose.model('Event', EventSchema)

module.exports = Event