const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.home);
router.get("/submit", userController.submitInfo);
router.post("/submit", userController.submitInfoOnPost);

module.exports = router;