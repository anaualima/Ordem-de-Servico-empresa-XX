const express = require('express');

const authToken = require('../middleware/authToken');
const routerOrder = express.Router();
const OrderController = require('../controllers/orderController');

routerOrder.post('/', authToken, OrderController.create);
routerOrder.get('/', authToken, OrderController.getOrders);
routerOrder.get('/search', authToken, OrderController.search);

module.exports = {
  routerOrder,
}