const Encuesta = require("../models/Encuesta.model");

const crearEncuesta = async (req, res) => {
  try {
    const { cedula, eps, experience, recommend } = req.body;

    if (!cedula || !eps || !experience || !recommend) {
      return res.status(400).json({ 
        message: "Todos los campos son obligatorios" 
      });
    }

    const nuevaEncuesta = new Encuesta({
      cedula,
      eps,
      experience,
      recommend,
    });

    const encuestaGuardada = await nuevaEncuesta.save();

    res.status(201).json(encuestaGuardada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: "Error guardando encuesta" 
    });
  }
};

const obtenerEncuestas = async (req, res) => {
  try {
    const encuestas = await Encuesta.find();
    res.json(encuestas);
  } catch (error) {
    res.status(500).json({ 
      message: "Error obteniendo encuestas" 
    });
  }
};

module.exports = {
  crearEncuesta,
  obtenerEncuestas,
};