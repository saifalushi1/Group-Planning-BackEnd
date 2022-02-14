const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    name: String,
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
},
{timestamps: true}
)

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group