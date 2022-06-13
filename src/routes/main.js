const express = require("express");
const router = express.Router();

//imports
const mainController = require("../controllers/mainController");

router.get('/', mainController.index);
router.post('/comentario', mainController.comentario);
router.get('/comentarios', mainController.comentarios);

module.exports = router;