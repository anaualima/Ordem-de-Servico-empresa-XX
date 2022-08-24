const express = require('express');

const authToken = require('../middleware/authToken');
const routerOrder = express.Router();
const OrderController = require('../controllers/orderController');

routerOrder.post('/', authToken, OrderController.create);
routerOrder.get('/', authToken, OrderController.getOrders);
routerOrder.get('/search', authToken, OrderController.search);
routerOrder.get('/client', authToken, OrderController.getOsClient);
routerOrder.get('/collaborator', authToken, OrderController.getOsCollaborator);

module.exports = {
  routerOrder,
}