const express = require('express');

const routerClient = express.Router();
const ClientController = require('../controllers/clientController');

routerClient.get('/', ClientController.getAll);

module.exports = {
  routerClient,
}