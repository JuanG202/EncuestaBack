const mongoose = require("mongoose");

const encuestaSchema = new mongoose.Schema({
  cedula: {
    type: String,
    required: true,
  },
  eps: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  recommend: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Encuesta", encuestaSchema);