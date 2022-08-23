const { Order } = require('../models');
const { Sequelize } = require('sequelize');

const create = async (objOrder) => {
  const order = await Order.create(objOrder);
  return order;
};

const getOrders = async () => {
  const orders = await Order.findAll();

  return orders;
};

const search = async (query) => {
  const filtered = await Order.findAll({ where: query });
  return filtered;
};

module.exports = {
  create,
  getOrders,
  search,
}