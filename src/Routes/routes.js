const express = require('express');
const routes = express.Router();

const ClienteControllers =  require('../Controllers/Cliente.Controllers');


routes.post('/',ClienteControllers.create);
routes.get('/clientes',ClienteControllers.read)
routes.get('/cliente/:id',ClienteControllers.read_id)
routes.get('/cliente/:cpf',ClienteControllers.read_cpf)
routes.put('/cliente/:id',ClienteControllers.update)
routes.delete('/cliente/:id',ClienteControllers.Delete)



module.exports = routes;