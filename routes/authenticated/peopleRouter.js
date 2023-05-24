const express = require("express");
const peopleController = require("../../controllers/peopleController");

const router = express.Router();

router.get("/all", peopleController.getPeople);

module.exports = router;
