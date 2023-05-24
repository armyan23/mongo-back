const express = require("express");
const router = express.Router();
const accountRouter = require("./authenticated/accountRouter");
const peopleRouter = require("./authenticated/peopleRouter");

router.use("/account", accountRouter);
router.use("/people", peopleRouter);

module.exports = router;
