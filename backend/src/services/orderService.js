const { Order } = require('../models');;

const create = async (objOrder) => {
  const order = await Order.create(objOrder);
  return order;
};

const getOrders = async () => {
  const orders = await Order.findAll();

  return {
    data: orders,
  }
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

const getOsDate = async (query) => {
  const tratamentDate = query.date
  const filtered = await Order.findAll({ where: { data: tratamentDate } });
  if (!filtered) return {
    data: filtered,
    message: 'Nenhuma O.S foi encontrada com esta data.'
  }

  return {
    data: filtered,
    message: 'O.S encontradas!'
  }
};

const del = async (id) => {
  const exclude = await Order.destroy({ where: { id } })
  return exclude;
};

module.exports = {
  create,
  getOrders,
  getOsClient,
  getOsCollaborator,
  del,
  getOsDate,
}