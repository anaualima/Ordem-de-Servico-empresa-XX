const { Order } = require('../models');

const create = async (objOrder) => {
  const validate = await Order.findAll({ where: { id: objOrder.id } })
  const order = await Order.create(objOrder);
  if (validate) return {
    data: order,
    message: 'Esta O.S já existe.'
  }
  return {
    data: order,
    message: 'O.S criada com sucesso!'
  }
};

const getOrders = async () => {
  const orders = await Order.findAll();

  return orders;
};


const getOsClient = async (clientId) => {
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

const getOsCollaborator = async (collaboratorId) => {
  const os = await Order.findAll({ where: { collaboratorId } });

  if (!os) return {
    data: os,
    message: 'Nenhuma OS foi realizada por este colaborador!'
  };

  return {
    data: os,
    message: 'O.S encontradas!'
  };
}

const search = async (query) => {
  const filtered = await Order.findAll({ where: { data: query } });
  return filtered;
};

const del = async (id) => {
  const exclude = await Order.destroy({ where: { id } })
  return exclude;
};

module.exports = {
  create,
  getOrders,
  search,
  getOsClient,
  getOsCollaborator,
  del,
}