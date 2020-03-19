const jwt = require("jsonwebtoken")

const validateToken = (req, res, next) => {
	//get the token from the header
	const authHeader = req.headers["authorization"]
	const token = authHeader && authHeader.split(" ")[1]

	if (!token)
		return res.status(401).json({ msg: "No token, authorization denied" })

	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
		req.user = decoded
		next()
	} catch (e) {
		const error = new HttpError("Authentication failed!", 403)
		return next(error)
	}
}

module.exports = validateToken
