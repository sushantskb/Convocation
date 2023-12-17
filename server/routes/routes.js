const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const submitController = require("../controller/submitController");

router.get("/", userController.home);
router.get("/submit", submitController.submitInfo);
router.post("/submit", submitController.submitInfoOnPost);

module.exports = router;