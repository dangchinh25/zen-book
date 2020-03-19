const router = require("express").Router()

const { getUsers, signin, signup } = require("../controllers/users-controllers")
const fileUpload = require("../middleware/file-upload")

router.get("/", getUsers)

router.post("/signup", signup)

router.post("/signin", fileUpload.single("image"), signin)

module.exports = router
