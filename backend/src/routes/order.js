const express = require('express');

const authToken = require('../middleware/authToken');
const routerOrder = express.Router();
const OrderController = require('../controllers/orderController');

routerOrder.post('/', authToken, OrderController.create);
routerOrder.get('/', authToken, OrderController.getOrders);
routerOrder.get('/date/:date', authToken, OrderController.getOsDate);
routerOrder.get('/client/:id', authToken, OrderController.getOsClient);
routerOrder.get('/collaborator/:id', authToken, OrderController.getOsCollaborator);
routerOrder.delete('/:id', authToken, OrderController.delOrder);

module.exports = {
  routerOrder,
}