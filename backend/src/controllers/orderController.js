const OrderService = require('../services/orderService');

const create = async (req, res, next) => {
  const objOrder = req.body;
  try {
    const order = await OrderService.create(objOrder);
    return res.status(201).json(order);
  } catch (e) {
    console.log(e);
  };
};

const getOrders = async (_req, res, next) => {
  try {
    const { data } = await OrderService.getOrders();

    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  };
};

const getOsCollaborator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, message } = await OrderService.getOsCollaborator(id);
    if (!data) return res.status(404).json({ message });
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
}

const getOsClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, message } = await OrderService.getOsClient(id);
    if (!data) return res.status(404).json({ message });
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
};

const getOsDate = async (req, res, next) => {
  try {
    const { data, message } = await OrderService.getOsDate(req.params);
    if (!data) return res.return(404).json({ message });
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
};

const delOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    await OrderService.del(id)
    return res.status(204).json({ message: 'excluído com sucesso' });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  getOrders,
  getOsCollaborator,
  getOsClient,
  getOsDate,
  delOrder,
}