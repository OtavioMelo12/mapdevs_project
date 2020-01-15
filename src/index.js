const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://mapuser:mapuser@cluster0-p9zi7.mongodb.net/mapdevs?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros:
// Query Params: req.query (filtros, ordenacao, paginacao, ...)
// Route Params: req.params (identificar um recurso na alteracao ou remocao)
// Body Params: req.body (dados para criacao ou alteracao de um registro)

// MongoDB (nao-relacional)
