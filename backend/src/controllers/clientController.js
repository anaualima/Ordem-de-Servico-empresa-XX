const ClientService = require('../services/clientService');

const getAll = async (_req, res, next) => {
  try {
    const result = await ClientService.getAll();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAll,
}