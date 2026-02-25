const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/encuestas', require('./src/routes/encuesta.routes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => console.log('Error conectando DB:', err));

app.listen(4000, () => {
  console.log('Servidor corriendo en puerto 4000');
});