require("./connection")
const Event = require("./models/Event")
const User = require("./models/User")
const Group = require("./models/Group")
const seedData = require("./seedData.json")

// User.deleteMany()
//     .then(() => User.insertMany(seedData))
//     .then(console.log)
//     .catch(console.error)
//     .finally(process.exit);

Event.deleteMany()
.then(console.log)
.catch(console.error)
.finally(process.exit);