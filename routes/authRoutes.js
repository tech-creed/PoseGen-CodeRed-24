const express = require("express")

const router = express.Router()

const authController = require("../controllers/authController")

router.post("/signin",authController.signin)
router.post("/login",authController.login)
router.post("/profile-update",authController.profileUpdate)

module.exports = router