const router = require("express").Router()

const { getUsers, signin, signup } = require("../controllers/users-controllers")
const fileUpload = require("../middleware/file-upload")

router.get("/", getUsers)

router.post("/signup", fileUpload.single("image"), signup)

router.post("/signin", signin)

module.exports = router
