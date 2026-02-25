const express = require("express");
const cors = require("cors");

const encuestaRoutes = require("./routes/encuesta.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/encuestas", encuestaRoutes);

module.exports = app;