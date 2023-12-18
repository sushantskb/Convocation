const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const submitController = require("../controller/submitController");
const adminController = require("../controller/adminController");

router.get("/", userController.home);
router.get("/submit", submitController.submitInfo);
router.post("/submit", submitController.submitInfoOnPost);
router.get("/admin", adminController.adminData);
router.get("/details/:id", adminController.detailPage);

module.exports = router;