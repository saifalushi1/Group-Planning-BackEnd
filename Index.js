require("./connection")
const express = require('express')
const cors = require('cors')

const app = express();
app.set('port', process.env.PORT || 8000)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
	res.redirect('/grouper')
})

const userController = require("./controllers/userController")
app.use("/grouper/signup", userController)


app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`)
})