require("./connection")
const express = require('express')
const cors = require('cors')

const app = express();
app.set('port', process.env.PORT || 8000)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
	res.redirect('/grouper/signin')
})

const requestLogger = require("./middleware/request_logger")
app.use(requestLogger)

const userController = require("./controllers/userController")
app.use("/grouper", userController)

const eventController = require("./controllers/eventController")
app.use("/grouper/events", eventController)

const groupController = require("./controllers/groupController")
app.use("/grouper/groups", groupController)

const { handleErrors } = require("./middleware/custom_errors")
app.use(handleErrors)

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`)
})