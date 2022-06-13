const express = require("express");
const router = express.Router();

//imports
const mainController = require("../controllers/mainController")

router.get('/', mainController.index);                              //ruta al Index
router.post('/comentario', mainController.comentario);              //ruta para recibir los comentarios

module.exports = router;