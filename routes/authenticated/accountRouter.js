const express = require("express");
const multer = require("multer");
const accountController = require("../../controllers/accountController");

const router = express.Router();

router.get("/", accountController.getAccount);

router.patch("/name", accountController.updateAccountName);
router.patch("/password", accountController.updateAccountPassword);

router.patch(
  "/photo",
  multer().single("photo"),
  accountController.updateAccountPhoto
);
router.delete("/photo", accountController.updateAccountDelete);

module.exports = router;
