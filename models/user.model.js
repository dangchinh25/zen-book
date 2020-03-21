const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
	fullname: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, minlength: 6 },
	image: { type: String, required: true },
	review: [{ type: mongoose.Types.ObjectId, ref: "Review" }]
})

module.exports = mongoose.model("User", userSchema)
