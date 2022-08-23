const express = require('express');

const authToken = require('../middleware/authToken');
const routerClient = express.Router();
const ClientController = require('../controllers/clientController');

routerClient.get('/', authToken, ClientController.getAll);
routerClient.post('/', ClientController.create);
routerClient.put('/:id', ClientController.edit);
routerClient.delete('/:id', ClientController.del);
routerClient.get('/:id', ClientController.getById);

module.exports = {
  routerClient,
}