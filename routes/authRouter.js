const express = require("express");
const multer = require("multer");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/sign-up", multer().single("photo"), authController.signUp);
router.post("/sign-in", authController.signIn);

module.exports = router;
