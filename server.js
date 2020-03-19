const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")

const app = express()
app.use(cors())
app.use(express.json())
require("dotenv").config()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
})
