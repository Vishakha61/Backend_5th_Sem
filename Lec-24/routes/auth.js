const express = require("express");
const router = express.Router();

// import controller
const { postLogin } = require("../controller/authcontroller");

// login route
router.post("/login", postLogin);

module.exports = router;
