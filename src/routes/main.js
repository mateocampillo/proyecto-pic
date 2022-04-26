const express = require("express");
const router = express.Router();

//imports
const mainController = require("../controllers/mainController")

router.get("/", mainController.index);

module.exports = router;