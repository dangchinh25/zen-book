const mongoose = require("mongoose")

const Schema = mongoose.Schema

const reviewSchema = new Schema({
	title: { type: "String", required: true },
	author: { type: "String", required: true },
	desc: { type: "String", required: true },
	image: { type: "String", required: true },
	creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" }
})

module.exports = mongoose.model("Review", reviewSchema)
