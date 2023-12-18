const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const submitController = require("../controller/submitController");
const adminController = require("../controller/adminController");

// user routes
// router.get("/", (req, res) => res.send("Home"));
router.get("/check",userController.check)
router.get("/", userController.login);
router.post("/", userController.loginAction);
router.get("/submit", submitController.submitInfo);
router.post("/submit", submitController.submitInfoOnPost);

// admin routes
router.get("/admin", adminController.adminData);
router.get("/details/:id", adminController.detailPage);

module.exports = router;
