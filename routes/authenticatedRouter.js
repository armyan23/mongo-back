const express = require("express");
const router = express.Router();
const accountRouter = require("./authenticated/accountRouter");
const peopleRouter = require("./authenticated/peopleRouter");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

router.use("/", authenticationMiddleware);

router.use("/account", accountRouter);
router.use("/people", peopleRouter);

module.exports = router;
