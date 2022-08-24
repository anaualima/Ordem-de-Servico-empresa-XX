const { Order } = require('../models');

const create = async (objOrder) => {
  const order = await Order.create(objOrder);
  return order;
};

const getOrders = async () => {
  const orders = await Order.findAll();

  return orders;
};


const getOsClient = async (obj) => {
  const { clientId } = obj;
  const os = await Order.findAll({ where: { clientId } });

  if (!os) return {
    data: os,
    message: 'Nenhuma O.S foi requerida por este cliente!'
  };

  return {
    data: os,
    message: 'O.S encontradas!'
  };
}

const getOsCollaborator = async (obj) => {
  const { collaboratorId } = obj;
  const os = await Order.findAll({ where: { collaboratorId } });

  if (!os) return {
    data: os,
    message: 'Nenhuma OS foi realizada por este colaborador.'
  };

  return {
    data: os,
    message: 'O.S encontradas!'
  };
}

const search = async (query) => {
  console.log(query);
  const filtered = await Order.findAll({ where: query });
  return filtered;
};

module.exports = {
  create,
  getOrders,
  search,
  getOsClient,
  getOsCollaborator,
}