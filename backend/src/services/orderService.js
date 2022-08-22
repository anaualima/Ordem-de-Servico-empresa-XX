const { Order } = require('../models');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

const create = async (objOrder) => {
  const order = await Order.create(objOrder);
  return order;
};

const getOrders = async () => {
  const orders = await Order.findAll();

  return orders;
};

const filter = async (query) => {
  const { clientId, collaboratorId, data } = query;
  const objOrder = {};
  if (clientId) {
    objOrder.clientId = clientId
  }
  if (collaboratorId) {
    objOrder.collaboratorId = collaboratorId
  }
  if (data) {
    objOrder.data = { [Op.iLike]: `%${data}%` }
  }
  console.log(objOrder);
  const filtered = await Order.findAll({
    where: objOrder,
  });
  return filtered;
};

module.exports = {
  create,
  getOrders,
  filter,
}