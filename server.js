const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: "https://encuestaclinivision.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
}));

app.use(express.json());

app.use('/api/encuestas', require('./src/routes/encuesta.routes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => console.log('Error conectando DB:', err));

module.exports = app;