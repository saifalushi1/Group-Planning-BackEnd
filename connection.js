require('dotenv').config()
const mongoose = require("mongoose")

const mongoURI = process.env.DATABASE_URL
const db = mongoose.connection

mongoose.connect(mongoURI)