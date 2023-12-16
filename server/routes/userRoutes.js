const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.home);
router.get("/submit", userController.submit)

module.exports = router;