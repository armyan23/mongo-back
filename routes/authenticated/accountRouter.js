const express = require("express");
const accountController = require("../../controllers/accountController");

const router = express.Router();

router.get("/", accountController.getProfile);
router.put("/", accountController.updateProfile);

module.exports = router;
