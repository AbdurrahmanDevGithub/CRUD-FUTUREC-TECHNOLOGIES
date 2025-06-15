const express = require("express")
const router = express.Router()

const LoginController = require('../controller/Login.controller')


router.post("/signup",LoginController.signup)
router.post("/signin", LoginController.signin);


module.exports = router


