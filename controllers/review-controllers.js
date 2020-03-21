const uuid = require("uuid/v4")
const mongoose = require("mongoose")

const Review = require("../models/review.model")
const User = require("../models/user.model")

const newReview = async (req, res, next) => {
	const { title, author, desc } = req.body

	const createdReview = new Review({
		title,
		author,
		desc,
		image: req.file.path,
		creator: req.userData.userId
	})
}
