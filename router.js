const express = require('express');
const route = express.Router()
const homeControl = require('./src/controllers/homeControl')
const contatosControl = require('./src/controllers/contatosControl')

// Rotas de Home
route.get('/', homeControl.paginaInicial)
route.post('/', homeControl.postEnv)

// Rotas de Contato
route.get('/contato', contatosControl.paginaInicial)

module.exports = route;