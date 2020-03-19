const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

//routes
const userRoutes = require("./routes/users-routes")

const app = express()
app.use(cors())
app.use(express.json())
require("dotenv").config()

const PORT = process.env.PORT || 5000

//handling routes
app.use("/users", userRoutes)

//connect mongo
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once("open", () => {
	console.log("MongoDB connected")
})

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
})
