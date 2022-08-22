const express = require('express');

const routerOrder = express.Router();
const OrderController = require('../controllers/orderController');

routerOrder.post('/', OrderController.create);
routerOrder.get('/', OrderController.getOrders);
routerOrder.get('/search', OrderController.search);

module.exports = {
  routerOrder,
}