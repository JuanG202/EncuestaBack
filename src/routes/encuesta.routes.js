const express = require("express");
const router = express.Router();
const encuestaController = require("../controllers/encuesta.controller");

router.post("/", encuestaController.crearEncuesta);
router.get("/", encuestaController.obtenerEncuestas);

module.exports = router;