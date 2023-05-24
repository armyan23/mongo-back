const express = require("express");
const accountController = require("../../controllers/accountController");

const router = express.Router();

router.get("/", accountController.getAccount);
router.put("/", accountController.updateAccount);

module.exports = router;
