const express = require('express');

const routerClient = express.Router();
const ClientController = require('../controllers/clientController');

routerClient.get('/', ClientController.getAll);
routerClient.post('/', ClientController.create);
routerClient.put('/:id', ClientController.edit);
routerClient.delete('/:id', ClientController.del);

module.exports = {
  routerClient,
}