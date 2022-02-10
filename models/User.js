const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    groups:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
        required: false
      }
    ]        
},
{
    timestamps: true,
    toJSON: {
      virtuals: true,
      // ret is the returned Mongoose document
      transform: (_doc, ret) => {
        delete ret.password;
        return ret;
      },
    },
}
)

const User = mongoose.model('User', UserSchema)

module.exports = User