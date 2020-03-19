const uuid = require("uuid/v4")
const User = require("../models/user.model")

const getUsers = async (req, res, next) => {
	let users

	try {
		users = await User.find({}, "-password")
	} catch (err) {
		const error = new Error("Get users data failed")

		return next(error)
	}

	res.json({ user: users })
}

const signup = async (req, res, next) => {
	const { fullname, username, email, password } = req.body

	//check if user already existed
	let existingUser
	try {
		existingUser = await User.findOne({ username: username })
	} catch (err) {
		const error = new Error("Signing up failed" + err)

		return next(error)
	}

	if (existingUser) {
		const error = new Error("User already existed")

		return next(error)
	}

	//create new user
	const newUser = new User({
		fullname,
		username,
		email,
		password
	})

	try {
		await newUser.save()
	} catch (err) {
		const error = new Error("Signing up failed" + err)

		return next(error)
	}

	res.status(201).json({ user: newUser })
}

const signin = async (req, res, next) => {
	const { username, password } = req.body

	let existingUser

	try {
		existingUser = await User.findOne({ username: username })
	} catch (err) {
		const error = new Error("Sign In failed")

		return next(error)
	}

	if (!existingUser || existingUser.password !== password) {
		const error = new Error("Invalid credentials")

		return next(error)
	}

	res.json({ msg: "Signed in", user: existingUser })
}

module.exports = { getUsers, signin, signup }
