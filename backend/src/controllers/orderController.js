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
    const result = await OrderService.getOrders();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
  };
};

const search = async (req, res, next) => {
  try {
    const filtered = await OrderService.filter(req.query);
    return res.status(200).json(filtered);
  } catch (e) {
    console.log(e);
  }
};

const getOsClient = async (req, res, next) => {
  try {
    console.log(req.body);
    const { data, message } = await OrderService.getOsClient(req.body);
    if (!data) return res.status(404).json({ message });
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
};

const getOsCollaborator = async (req, res, next) => {
  try {
    const { data, message } = await OrderService.getOsCollaborator(req.body);
    if (!data) return res.status(404).json({ message });
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  create,
  getOrders,
  search,
  getOsClient,
  getOsCollaborator,
}